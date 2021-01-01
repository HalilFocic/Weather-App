import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { FiWind } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import WeatherTemparature from "./WeatherTemparature";
import WeatherIcon from "./WeatherIcon";
import WeatherConds from "./WeatherConds";
const WeatherApp = (result) => {
  const forecast = result.weather[0].main;
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
      <WeatherConds {...result.main} {...result.wind} />
    </>
  );
};
export default WeatherApp;
