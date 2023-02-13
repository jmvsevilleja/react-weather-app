import React, { useState } from "react";
import moment from "moment";
import { getWeather } from "../api/api";
import Button from "../components/Button";
import TextField from "../components/TextField";

interface Props {
  screen: string;
  setScreen(screen: string): void;
}
interface WeatherData {
  name: string;
  date: number;
  temp: string;
  desc: string;
  main: string;
  pressure: string;
  humidity: string;
}

const WeatherScreen: React.FC<Props> = ({ screen, setScreen }) => {
  const [city, setCity] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [weather, setWeather] = useState<Array<WeatherData>>([]);

  const handleGetWeather = async () => {
    getWeather(city).then((data) => {
      if (data) {
        setMessage("");
        setScreen("weather");
        setWeather(
          data.list
            .filter((item: any) => item.dt_txt.endsWith("6:00:00"))
            .map((item: any) => ({
              name: item.name,
              date: moment.unix(item.dt).format("MM/DD/YYYY"),
              temp: item.main.temp,
              desc: item.weather[0].description,
              main: item.weather[0].main,
              pressure: item.main.pressure,
              humidity: item.main.humidity,
            }))
        );
      } else {
        setMessage("City not found");
        setWeather([]);
        setScreen("");
      }
    });
  };

  return (
    <div className="my-10 space-y-4">
      {screen !== "weather" && (
        <div className="space-y-4">
          <div className="flex justify-center">
            <TextField
              name="city"
              label=""
              value={city}
              onChange={(e: any) => setCity(e.target.value)}
              placeholder="City"
            />
          </div>
          <div className="flex justify-center">
            <Button text="Display Weather" onClick={() => handleGetWeather()} />
          </div>
        </div>
      )}
      {message && <div className="flex justify-center">{message}</div>}
      {weather.length !== 0 && screen == "weather" && (
        <div className="table-responsive overflow-auto mt-4">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Temperature(F)</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Main</th>
                <th className="px-4 py-2">Pressure</th>
                <th className="px-4 py-2">Humidity</th>
              </tr>
            </thead>
            <tbody>
              {weather.map((item: any, key: number) => (
                <tr className="bg-gray-100" key={key}>
                  <td className="border px-4 py-2"> {item.date}</td>
                  <td className="border px-4 py-2">{item.temp}</td>
                  <td className="border px-4 py-2">{item.desc}</td>
                  <td className="border px-4 py-2">{item.main}</td>
                  <td className="border px-4 py-2">{item.pressure}</td>
                  <td className="border px-4 py-2">{item.humidity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {screen && (
        <div className="flex justify-end">
          <Button text="Back" onClick={() => setScreen("")} />
        </div>
      )}
    </div>
  );
};

export default WeatherScreen;
