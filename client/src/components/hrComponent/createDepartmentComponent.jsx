import HrLandingPageComponent from "./hrLandingPageComponent";
import "./createDepartmentComponent.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createHrDepartment } from "../../redux/Actions/hrActions";

const CreateDepartmentComponent = () => {
  const [department, setDepartment] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postDepartment = (e) => {
    e.preventDefault();
    dispatch(createHrDepartment(department));
    navigate("/hrlandingpage");
  };
  return (
    <div className="dept">
      <div>
        <HrLandingPageComponent />
      </div>
      <div className="dept__page">
        <h2>Create Department</h2>
        <form onSubmit={postDepartment}>
          <div className="dept__input">
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Enter Department"
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

export default CreateDepartmentComponent;
