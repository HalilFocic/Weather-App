import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { IoCloudSharp } from "react-icons/io5";
import { FiWind } from "react-icons/fi";
import { FaTemperatureHigh } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
const WeatherApp = (result) => {
  const forecast = result.weather[0].main;
  const temparature = result.main.temp;
  const wind = result.wind.speed;
  const city = result.name;
  return (
    <>
      <h4>{forecast === "Clouds" ? <IoCloudSharp /> : "Nisu oblaci"}</h4>
      <h4>
        <FaTemperatureHigh />
        {temparature}
      </h4>
      <h4>
        <FiWind />
        {wind}
      </h4>
      <h4>
        <HiLocationMarker />
        {city}
      </h4>
    </>
  );
};
export default WeatherApp;
