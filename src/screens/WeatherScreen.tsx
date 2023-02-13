import React from "react";
import { useState } from "react";
import moment from "moment";
import { getWeather } from "../api/api";
import Button from "../components/Button";
import TextField from "../components/TextField";

interface WeatherData {
  name: string;
  date: number;
  temp: string;
  desc: string;
  main: string;
  pressure: string;
  humidity: string;
}

const WeatherScreen: React.FC = () => {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [weather, setWeather] = useState<Array<WeatherData>>([]);

  const handleGetWeather = async () => {
    getWeather(city).then((data) => {
      if (data) {
        setMessage("");
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
      }
    });
  };

  return (
    <div className="my-10 space-y-4">
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
      {message && <div className="flex justify-center">{message}</div>}
      {weather.length !== 0 && (
        <div className="table-responsive overflow-auto">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="bg-gray-800 text-white">
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
    </div>
  );
};

export default WeatherScreen;
