import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Route } from "react-router-dom";
import Forecast from "./components/Forecast";
import Details from "./components/Details";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          render={function(props) {
            return (
              <Main
                handleSubmitCity={city =>
                  props.history.push({
                    pathname: "forecast",
                    search: "?city=" + city
                  })
                }
              />
            );
          }}
        />
        <Route path="/forecast" component={Forecast} />
        <Route path="/details" component={Details} />
      </div>
    );
  }
}

export default App;
