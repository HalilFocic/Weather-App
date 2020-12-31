import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { IoCloudSharp } from "react-icons/io5";
const WeatherApp = (result) => {
  const forecast = result.weather[0].main;
  const temparature = result.main.temp;
  const wind = result.wind.speed;
  const city = result.name;
  return (
    <>
      <h4>{forecast === "Clouds" ? <IoCloudSharp /> : "Nisu oblaci"}</h4>
      <h4>{temparature}</h4>
      <h4>{wind}</h4>
      <h4>{city}</h4>
    </>
  );
};
export default WeatherApp;
