import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const OperationsLandingPageComponent = () => {
  const { login, loading } = useSelector((state) => state.login);
  console.log("login", login?.data.fullName);
  console.log("loading", loading);
  return (
    <div className="welcome">
      <h2>Welcome.....{!loading && login.data.fullName}</h2>
      <h2>Operations...</h2>
      <div>
        <Link to={"/customerLandingPage"}>Customer Service</Link>
      </div>
      <div>
        <Link to={"/vaultlandingpage"}>Vault Operations</Link>
      </div>
      <div>
        <Link to={"/tellerlandingpage"}>Teller Operations</Link>
      </div>
    </div>
  );
};

export default OperationsLandingPageComponent;
