import React from "react";
import { Navbar } from "reactstrap";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar>
      <Link to="/">
        <div className="left-Header">Forecast</div>
      </Link>
      <div className="right-header" />
    </Navbar>
  );
};

export default Header;
