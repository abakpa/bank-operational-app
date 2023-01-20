import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/Actions/logOutAction";
const FooterComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout(navigate));
  };
  return (
    <div className=" footer">
      <div className="content nav__flex">
        <p className="logo"> &#169; Copyright 2023</p>
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
          <li>
            <button className="pointer" onClick={logOut}>
              Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterComponent;
