import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminLandingPageComponent = () => {
  const { login, loading } = useSelector((state) => state.login);
  console.log("login", login?.data.fullName);
  console.log("loading", loading);
  return (
    <div className="welcome">
      <h2>Welcome.....{!loading && login.data.fullName}</h2>
      <div>
        <Link to={"/createbank"}>Create Bank</Link>
      </div>
    </div>
  );
};

export default AdminLandingPageComponent;
