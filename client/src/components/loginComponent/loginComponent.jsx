import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./loginComponent.css";
import { Link } from "react-router-dom";
import { logins } from "../../redux/Actions/loginActions";

const LoginComponent = () => {
  const { error, loading } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    const log = {
      userName,
      password,
    };
    dispatch(logins(log, navigate));
  };

  return (
    <div className="login__center">
      <div className="login__header">Login</div>
      {loading && <div>Loading...</div>}
      {error && <div>{error.msg}</div>}
      <form onSubmit={loginSubmit}>
        <div>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="login__btn">
          <button type="submit">Login</button>{" "}
          <span>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
