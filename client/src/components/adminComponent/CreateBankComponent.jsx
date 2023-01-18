import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createBank } from "../../redux/Actions/adminActions";
import AdminLandingPageComponent from "../adminComponent/AdminLandingPageComponent";

const CreateBankComponent = () => {
  const dispatch = useDispatch();
  const { staff, loading } = useSelector((state) => state.staff);
  const [bankName, setBankName] = useState("");
  const [staffName, setStaffName] = useState("");
  const createNewTeller = (e) => {
    e.preventDefault();
    const postBank = {
      bankName,
      staffName,
    };
    dispatch(createBank(postBank));
  };

  return (
    <div className="dept">
      <div>
        <AdminLandingPageComponent />
      </div>
      <div>
        <form onSubmit={createNewTeller}>
          <div className="login__center">
            <h2>Create Bank</h2>
            {!loading ? staff?.data.fullName : "loading..."}
            <input
              type="text"
              value={bankName}
              placeholder="Bank Name"
              onChange={(e) => setBankName(e.target.value)}
            />
            <input
              type="text"
              value={staffName}
              placeholder="Staff Name"
              onChange={(e) => setStaffName(e.target.value)}
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

export default CreateBankComponent;
