import React from "react";
import { Navbar } from "reactstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar>
      <div className="left-Header">Clever Title</div>
      <div className="right-header">
        <form>
          <input placeholder="St. George, Utah" />
          <button>Get Weather</button>
        </form>
      </div>
    </Navbar>
  );
};

export default Header;
