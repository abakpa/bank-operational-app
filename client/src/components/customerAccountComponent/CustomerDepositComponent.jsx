import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tellerToCustomerDeposit } from "../../redux/Actions/customerActions";
import TellerLandingPageComponent from "../tellerComponent/TellerLandingPageComponent";

const CustomerDepositComponent = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.login);
  const token = login.token;
  // const [tellerId, setTellerId] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [deposit, setDeposit] = useState("");
  const [narration, setNarration] = useState("");

  const customerDeposit = (e) => {
    e.preventDefault();
    const postCustomerDeposit = {
      // tellerId,
      accountNumber,
      deposit,
      narration,
    };
    dispatch(tellerToCustomerDeposit(postCustomerDeposit, token));
    // setTellerId("");
    setAccountNumber("");
    setDeposit("");
    setNarration("");
  };
  return (
    <div className="dept">
      <div>
        <TellerLandingPageComponent />
      </div>
      <div>
        <form onSubmit={customerDeposit}>
          <div className="login__center">
            <h2>Customer Deposit</h2>
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
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
              placeholder="Amount"
            />
            <input
              type="text"
              value={narration}
              onChange={(e) => setNarration(e.target.value)}
              placeholder="Narration"
            />
            <div className="login__btn">
              <button type="submit">Post Deposit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerDepositComponent;
