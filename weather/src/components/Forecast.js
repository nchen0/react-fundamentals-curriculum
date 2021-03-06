import React from "react";
import axios from "axios";
import DayWeather from "./DayWeather";
import "./Forecast.css";

class Forecast extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      fetching: true,
      forecastData: ""
    };
  }
  componentDidMount() {
    let search = window.location.search.split("=")[1];
    this.setState({ fetching: true });

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast/daily?q=${search}&type=accurate&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=5`
      )
      .then(response => {
        this.setState({
          forecastData: response.data,
          fetching: false
        });
      })
      .catch(err => {
        console.log("");
      });
  }

  handleClick = city => {
    this.props.history.push({
      pathname: "/details/" + this.state.forecastData.city.name,
      state: city
    });
  };

  render() {
    console.log("this.state.forecastData is: ", this.state.forecastData);
    return (
      <div>
        {/* To prevent having to set a default prop of forecastData.city.name of "", we can have the below fire only after the data is received, so we don't have to worry about having to set a default / not having anything to map, or getting an error on display. */}
        {this.state.fetching === true ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h1>{this.state.forecastData.city.name} 5-Day Forecast</h1>

            <div className="days">
              {this.state.forecastData.list.map(lis => {
                return (
                  <div className="day" key={lis.dt}>
                    <DayWeather
                      onClick={() => this.handleClick(lis)}
                      day={lis}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Forecast;
