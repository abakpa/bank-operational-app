import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createTeller } from "../../redux/Actions/tellerActions";

const CreateTellerComponent = () => {
  const dispatch = useDispatch();
  const { staff, loading } = useSelector((state) => state.staff);
  const [staffNumber, setStaffNumber] = useState("");
  const createNewTeller = (e) => {
    e.preventDefault();
    dispatch(createTeller(staffNumber));
  };

  return (
    <div>
      <div>
        <form onSubmit={createNewTeller}>
          <div className="login__center">
            <h2>Create Teller</h2>
            {!loading ? staff?.data.fullName : "loading..."}
            <input
              type="text"
              value={staffNumber}
              placeholder="Staff Number"
              onChange={(e) => setStaffNumber(e.target.value)}
            />
            <div className="login__btn">
              <button type="submit">Create Teller</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTellerComponent;
