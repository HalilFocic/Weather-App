import React from "react";
import "./WeatherConds.css";
import { WiHumidity, WiBarometer } from "react-icons/wi";

const WeatherConds = ({ humidity, pressure }) => {
  return (
    <div className="weather-cons">
      <div className="con">
        <div>{humidity}%</div>
        <WiHumidity />
      </div>
      <div className="con">
        <div>{pressure}</div>
        <WiBarometer />
      </div>
    </div>
  );
};
export default WeatherConds;
