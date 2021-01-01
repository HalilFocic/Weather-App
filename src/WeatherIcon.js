import React from "react";
import { IoCloudSharp } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { RiHazeFill } from "react-icons/ri";
import "./WeatherIcon.css";
const icons = {
  Clouds: <IoCloudSharp />,
  Clear: <FiSun />,
  Haze: <RiHazeFill />,
};
const WeatherIcon = ({ forecast }) => {
  console.log(forecast);
  return (
    <>
      <div className="forecast-icon">{icons[forecast]}</div>
      <div className="forecast-name">{forecast}</div>
    </>
  );
};
export default WeatherIcon;
