import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";
import moment from "moment";

interface WeatherData {
  name: string;
  date: number;
  temp: string;
  desc: string;
  main: string;
  pressure: string;
  humidity: string;
}

const HomePage = () => {
  const { user, isLoading } = useAuth0();
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Array<WeatherData>>([
    {
      name: "",
      date: Date.now(),
      temp: "",
      desc: "",
      main: "",
      pressure: "",
      humidity: "",
    },
  ]);

  const getWeather = async (e: any) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/forecast`,
      {
        params: {
          q: city,
          appId: "03627bec46e7c83099632058667f9f64",
          units: "imperial",
        },
      }
    );
    console.log("response", response);
    if (response.data) {
      setWeather(
        response.data.list.map((item: any) => ({
          name: item.name,
          date: moment.unix(item.dt).format("MM/DD/YYYY"),
          temp: item.main.temp,
          desc: item.weather[0].description,
          main: item.weather[0].main,
          pressure: item.main.pressure,
          humidity: item.main.humidity,
        }))
      );
    }
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {user?.picture} - {user?.name} - {user?.email} -{" "}
      {`https://github.com/${user?.nickname}`}
      <div>
        <input
          onChange={(e: any) => setCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"} onClick={getWeather}>
          Search
        </button>

        {weather &&
          weather.map((item: any, key: number) => (
            <div key={key} className="mb-4">
              <div>Date: {item.date}</div>
              <div>Temperature (F) {item.temp}</div>
              <div>Description: {item.desc}</div>
              <div>Main : {item.main}</div>
              <div>Pressure: {item.pressure}</div>
              <div>Humidity: {item.humidity}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
