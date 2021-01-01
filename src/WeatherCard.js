import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { FiWind } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import WeatherTemparature from "./WeatherTemparature";
import WeatherIcon from "./WeatherIcon";
const WeatherApp = (result) => {
  const forecast = result.weather[0].main;
  const temparature = result.main.temp;
  const wind = result.wind.speed;
  const city = result.name;
  const country = result.sys.country;
  return (
    <>
      <h1>
        <HiLocationMarker />
        {city},{country}
      </h1>
      <WeatherIcon forecast={forecast} />
      <WeatherTemparature {...result.main} />
      <h4>
        <FiWind />
        {wind}
      </h4>
    </>
  );
};
export default WeatherApp;
