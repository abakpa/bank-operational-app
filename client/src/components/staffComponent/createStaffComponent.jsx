import "./createStaffComponent.css";
import HrLandingPageComponent from "../hrComponent/hrLandingPageComponent";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createStaff } from "../../redux/Actions/staffActions";
const CreateStaffComponent = () => {
  const [fullName, setFullName] = useState("");
  const [stateOfOrigin, setStateOfOrigin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sex, setSex] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [qualification, setQualification] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [department, setDepartment] = useState("");
  const [rank, setRank] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postStaffs = (e) => {
    e.preventDefault();
    const postStaff = {
      fullName,
      stateOfOrigin,
      phoneNumber,
      sex,
      dateOfBirth,
      maritalStatus,
      qualification,
      discipline,
      department,
      rank,
      role,
    };
    console.log(postStaff);
    dispatch(createStaff(postStaff));
    navigate("/hrlandingpage");
  };
  return (
    <div className="dept">
      <div>
        <HrLandingPageComponent />
      </div>
      <div className="dept__page">
        <h2>Create Staff</h2>
        <form onSubmit={postStaffs}>
          <div className="dept__input">
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter Fullname"
            />
          </div>
          <div className="dept__input">
            <input
              type="text"
              value={stateOfOrigin}
              onChange={(e) => setStateOfOrigin(e.target.value)}
              placeholder="Enter state of origin"
            />
          </div>
          <div className="dept__input">
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number"
            />
          </div>
          <div className="dept__input">
            <input
              type="text"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              placeholder="Enter sex"
            />
          </div>
          <div className="dept__input">
            <input
              type="text"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              placeholder="Enter date of birth"
            />
          </div>
          <div className="dept__input">
            <input
              type="text"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              placeholder="Enter marital status"
            />
          </div>
          <div className="dept__input">
            <input
              type="text"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              placeholder="Enter qualification"
            />
            <input
              type="text"
              value={discipline}
              onChange={(e) => setDiscipline(e.target.value)}
              placeholder="Enter discipline"
            />
          </div>
          <div className="dept__input">
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Enter department"
            />
          </div>
          <div className="dept__input">
            <input
              type="text"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              placeholder="Enter rank"
            />
          </div>
          <div className="dept__input">
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Enter role"
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

export default CreateStaffComponent;
