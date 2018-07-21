import React from "react";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      URL: "",
      temperature: ""
    };
  }

  inputCity = event => {
    this.setState({ city: event.target.value });
  };

  submitCity = event => {
    /*event.preventDefault();
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${
          this.state.city
        }&type=accurate&APPID=cfa73ee6bfaba6c2989e4a6bd85765de`
      )
      .then(response => {
        this.setState({ temperature: response.data });
        console.log(
          "this.state.temperature is: ",
          this.state.temperature
        );
      })
      .catch(err => {
        console.log("");
      });*/
    event.preventDefault();
    this.props.handleSubmitCity(this.state.city);
    this.setState({ city: "" });
  };

  render() {
    return (
      <div className="center">
        <div className="center-text">
          Enter a City and State
        </div>
        <div>
          <form className="main-form">
            <input
              onChange={this.inputCity}
              placeholder="St. George, Utah"
            />
            <button onClick={this.submitCity}>
              Get Weather
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Main;
