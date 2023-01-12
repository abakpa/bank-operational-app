import React from "react";
import "./navbarComponent.css";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  return (
    <div className="nav__bg__color">
      <div className="content nav__flex">
        <p className="logo">
          <Link to="/"> Abakpa Bank</Link>
        </p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Email</Link>
          </li>
          <li>
            <Link>News</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarComponent;
