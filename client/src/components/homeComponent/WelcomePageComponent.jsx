import React from "react";
import "./WelcomePageComponent.css";
import { Link } from "react-router-dom";

const WelcomePageComponent = () => {
  return (
    <>
      <div className="welcome__name"></div>
      <div className="welcome">
        <div>
          <Link to={"/adminlandingpage"}>Admin</Link>
        </div>
        <div>
          <Link to={"/hrlandingpage"}>Hr</Link>
        </div>
        <div>
          <Link to={"/operationlandingpage"}>Operations</Link>
        </div>
        <div>
          <Link to={"/customerlandingpage"}>Credit</Link>
        </div>
        <div>
          <Link to={"/customerlandingpage"}>Systems</Link>
        </div>
        <div>
          <Link to={"/createteller"}>Create Teller</Link>
        </div>
      </div>
    </>
  );
};

export default WelcomePageComponent;
