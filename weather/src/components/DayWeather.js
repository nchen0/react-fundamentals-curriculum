import React from "react";
import { getDate } from "./utils/helpers.js";

const DayWeather = props => {
  console.log("props.dt is ", props.dt);
  let date = getDate(props.day.dt);
  let icon = props.day.weather[0].icon;
  console.log("icon is: ", icon);

  return (
    <div>
      <div onClick={props.onClick}>
        <img
          className="weather"
          src={`./images/weather-icons/${icon}.svg`}
          alt="Weather"
        />
        <p>{date}</p>
      </div>
    </div>
  );
};

export default DayWeather;
