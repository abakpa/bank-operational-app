import React from "react";
import "./WelcomePageComponent.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/Actions/logOutAction";

const WelcomePageComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login, loading } = useSelector((state) => state.login);
  const token = login.token;
  console.log("login", login?.data.fullName);
  console.log("loading", loading);

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout(token, navigate));
  };
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
        <div>
          <button onClick={logOut}>Log out</button>
        </div>
      </div>
    </>
  );
};

export default WelcomePageComponent;
