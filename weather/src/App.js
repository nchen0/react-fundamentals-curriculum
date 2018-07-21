import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Route } from "react-router-dom";
import Forecast from "./components/Forecast";

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
      </div>
    );
  }
}

export default App;
