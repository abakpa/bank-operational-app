import React from "react";
import "./navbarComponent.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/Actions/logOutAction";
const NavbarComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.login);
  const token = login?.token;

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logout(navigate));
  };
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
          <li>
            <a className="pointer" onClick={logOut}>
              Log out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarComponent;
