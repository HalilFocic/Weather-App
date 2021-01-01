import React from "react";
import "./WeatherTemparature.css";
import { FaTemperatureHigh } from "react-icons/fa";
const WeatherTemparature = ({ temp, temp_min, temp_max }) => {
  return (
    <div className="temparature">
      <section className="temp-block">
        <div className="temp">{Math.ceil(temp)}°</div>
      </section>
    </div>
  );
};
export default WeatherTemparature;
