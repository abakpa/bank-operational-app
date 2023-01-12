import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import HrLandingPageComponent from "./hrLandingPageComponent";
import { createHrRole } from "../../redux/Actions/hrActions";
import "./createRoleComponent.css";
const CreateRoleComponent = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postRole = (e) => {
    e.preventDefault();
    dispatch(createHrRole(role));
    navigate("/hrlandingpage");
  };
  return (
    <div className="dept">
      <div>
        <HrLandingPageComponent />
      </div>
      <div className="dept__page">
        <h2>Create Role</h2>
        <form onSubmit={postRole}>
          <div className="dept__input">
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Enter Role"
            />
          </div>
          <div className="dept__btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRoleComponent;
