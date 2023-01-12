import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import HrLandingPageComponent from "./hrLandingPageComponent";
import "./createRankComponent.css";
import { createHrRank } from "../../redux/Actions/hrActions";

const CreateRankComponent = () => {
  const [rank, setRank] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postRank = (e) => {
    e.preventDefault();
    dispatch(createHrRank(rank));
    navigate("/hrlandingpage");
  };
  return (
    <div className="dept">
      <div>
        <HrLandingPageComponent />
      </div>
      <div className="dept__page">
        <h2>Create Rank</h2>
        <form onSubmit={postRank}>
          <div className="dept__input">
            <input
              type="text"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              placeholder="Enter Rank"
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

export default CreateRankComponent;
