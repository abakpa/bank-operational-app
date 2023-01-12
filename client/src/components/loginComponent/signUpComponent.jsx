import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./signUpComponent.css";
import { Link } from "react-router-dom";
import { signUp } from "../../redux/Actions/loginActions";

const SignUpComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [staffNumber, setStaffNumber] = useState("");
  const [staffCode, setStaffCode] = useState("");

  const staffSignUp = (e) => {
    e.preventDefault();
    const sign = {
      staffNumber,
      staffCode,
    };
    dispatch(signUp(sign));
    navigate("/createlogin");
  };
  return (
    <div className="login__center">
      <div className="login__header">Sign up</div>
      <form onSubmit={staffSignUp}>
        <div>
          <input
            type="text"
            value={staffNumber}
            onChange={(e) => setStaffNumber(e.target.value)}
            placeholder="Staff Number"
          />
        </div>
        <div>
          <input
            type="text"
            value={staffCode}
            onChange={(e) => setStaffCode(e.target.value)}
            placeholder="Staff Code"
          />
        </div>
        <div className="login__btn">
          <button type="submit">Sign up</button>{" "}
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUpComponent;
