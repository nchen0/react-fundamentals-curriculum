import React from "react";

import { getDate } from "./utils/helpers.js";
import "./Details.css";

class Details extends React.Component {
  render() {
    var props = this.props.location.state;
    var min_weather = Math.round((props.temp.min * 9) / 5 - 459.67);
    var max_weather = Math.round((props.temp.max * 9) / 5 - 459.67);
    let icon = props.weather[0].icon;
    let date = getDate(props.dt);
    console.log("icon is: ", icon);
    return (
      <div className="details">
        <p>{date}</p>
        <p>
          <strong>min temp:</strong> {min_weather} degrees{" "}
        </p>
        <p>
          <strong>max temp:</strong> {max_weather} degrees
        </p>
        <p>
          <strong>humidity:</strong> {props.humidity}
        </p>
        <p>{props.weather[0].description}</p>
      </div>
    );
  }
}

export default Details;
