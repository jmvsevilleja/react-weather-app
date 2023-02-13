import Axios from "axios";

const weather_api = "https://api.openweathermap.org/data/2.5/forecast";
const app_id = "03627bec46e7c83099632058667f9f64";

export const getWeather = async (city: String) => {
  try {
    return await Axios.get(weather_api, {
      params: {
        q: city,
        appId: app_id,
        units: "imperial",
      },
    }).then(async (res: any) => {
      if (res.status === 200) {
        return res.data;
      }
    });
  } catch (err) {
    console.error(err);
  }
};
