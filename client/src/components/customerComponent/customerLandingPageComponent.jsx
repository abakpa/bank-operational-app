import React from "react";
import "./customerLandingPageComponent.css";
import { Link } from "react-router-dom";
const hrLandingPageComponent = () => {
  return (
    <div className="page__position">
      <div className="content">
        <h3>Operations</h3>
        <p>
          <Link to="/createcustomer">Open account</Link>
        </p>
        <p>
          <Link to="/checkbalance">Check balnce</Link>
        </p>
        <p>
          <Link to="/accountstatement">View account statement</Link>
        </p>
        <p>
          <Link to="/viewallcustomer">View all customer</Link>
        </p>
        <p>
          <Link to="/viewallcustomer">Teller operations</Link>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default hrLandingPageComponent;
