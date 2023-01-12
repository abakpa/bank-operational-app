import React from "react";
import "./hrLandingPageComponent.css";
import { Link } from "react-router-dom";
const hrLandingPageComponent = () => {
  return (
    <div className="page__position">
      <div className="content">
        <h3>Human Resource Control Pannel</h3>
        <p>
          <Link to="/createdepartment">Create Department</Link>
        </p>
        <p>
          <Link to="/createrank">Create Rank</Link>
        </p>
        <p>
          <Link to="/createrole">Create Role</Link>
        </p>
        <p>
          <Link to="/createstaff">Create Staff</Link>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default hrLandingPageComponent;
