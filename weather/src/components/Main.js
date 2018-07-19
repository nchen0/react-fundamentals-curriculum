import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="center">
      <div className="center-text">
        Enter a City and State
      </div>
      <div>
        <form className="main-form">
          <input placeholder="St. George, Utah" />
          <button>Get Weather</button>
        </form>
      </div>
    </div>
  );
};

export default Main;
