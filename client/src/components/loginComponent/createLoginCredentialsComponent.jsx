import "./createLoginCredentialsComponent.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./signUpComponent.css";
import { createLogin } from "../../redux/Actions/loginActions";

const CreateLoginCredentialsComponent = () => {
  const staff = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const staffCreateLogin = (e) => {
    e.preventDefault();
    const id = staff.message.Data.checkLogin._id;
    const sign = {
      userName,
      password,
    };
    console.log(id);
    dispatch(createLogin(sign, id));
    navigate("/login");
  };
  return (
    <div className="login__center">
      <div className="login__header">Create Login Credentials</div>
      <form onSubmit={staffCreateLogin}>
        <div>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="UserName"
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
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default CreateLoginCredentialsComponent;
