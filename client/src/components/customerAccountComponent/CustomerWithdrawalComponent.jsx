import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tellerToCustomerWithdrawal } from "../../redux/Actions/customerActions";
import TellerLandingPageComponent from "../tellerComponent/TellerLandingPageComponent";

const CustomerWithdrawalComponent = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.login);
  const token = login.token;
  // const [tellerId, setTellerId] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [withdrawal, setWithdrawal] = useState("");
  const [narration, setNarration] = useState("");

  const customerWithdrawal = (e) => {
    e.preventDefault();
    const postCustomerWithdrawal = {
      // tellerId,
      accountNumber,
      withdrawal,
      narration,
    };
    dispatch(tellerToCustomerWithdrawal(postCustomerWithdrawal, token));
    // setTellerId("");
    setAccountNumber("");
    setWithdrawal("");
    setNarration("");
  };
  return (
    <div className="dept">
      <div>
        <TellerLandingPageComponent />
      </div>
      <div>
        <form onSubmit={customerWithdrawal}>
          <div className="login__center">
            <h2>Customer Withdrawal</h2>
            {/* <input
              type="text"
              value={tellerId}
              onChange={(e) => setTellerId(e.target.value)}
              placeholder="Teller Id"
            /> */}
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Account Number"
            />

            <input
              type="text"
              value={withdrawal}
              onChange={(e) => setWithdrawal(e.target.value)}
              placeholder="Amount"
            />
            <input
              type="text"
              value={narration}
              onChange={(e) => setNarration(e.target.value)}
              placeholder="Narration"
            />
            <div className="login__btn">
              <button type="submit">Post Withdrawal</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerWithdrawalComponent;
