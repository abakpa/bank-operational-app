import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCustomer } from "../../redux/Actions/customerActions";
import CustomerLandingPageComponent from "../customerComponent/customerLandingPageComponent";
import "./createCustomerComponent.css";
const CreateStaffComponent = () => {
  const [fullName, setFullName] = useState();
  const [stateOfOrigin, setStateOfOrigin] = useState();
  const [phone, setPhone] = useState();
  const [sex, setSex] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [address, setAddress] = useState();
  const [photoAndSignature, setPhotoAndSignature] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const postCustomer = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("stateOfOrigin", stateOfOrigin);
    formData.append("phone", phone);
    formData.append("sex", sex);
    formData.append("dateOfBirth", dateOfBirth);
    formData.append("address", address);
    formData.append("photoAndSignature", photoAndSignature);

    dispatch(createCustomer(formData));
    navigate("/customerlandingpage");
  };
  return (
    <div className="dept">
      <div>
        <CustomerLandingPageComponent />
      </div>
      <div className="dept__page">
        <h2>Open Customer Account</h2>
        <form onSubmit={postCustomer}>
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
            />
          </div>
          <div
            type="text"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="dept__input"
          >
            <input placeholder="Enter sex" />
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
            />
          </div>
          <div className="customer__photo">
            {/* <span className="photo__upload">Upload Photo</span>{" "} */}
            <input
              type="file"
              name="photoAndSignature"
              onChange={(e) => setPhotoAndSignature(e.target.files[0])}
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
