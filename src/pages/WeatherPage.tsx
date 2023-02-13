import React, { useState } from "react";
import WeatherScreen from "../screens/WeatherScreen";

const WeatherPage = () => {
  const [screen, setScreen] = useState<string>("");

  return (
    <div className="md:m-20 xl:mx-60 mx-2 my-10">
      <WeatherScreen screen={screen} setScreen={setScreen} />
    </div>
  );
};
export default WeatherPage;
