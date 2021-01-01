import React from "react";
import { IoCloudSharp } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { RiHazeFill } from "react-icons/ri";
import { FaRegSnowflake, FaCloudRain } from "react-icons/fa";
import { GiFog } from "react-icons/gi";

import "./WeatherIcon.css";
const icons = {
  Clouds: <IoCloudSharp />,
  Clear: <FiSun />,
  Haze: <RiHazeFill />,
  Snow: <FaRegSnowflake />,
  Fog: <GiFog />,
  Rain: <FaCloudRain />,
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
