import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getCustomer } from "../../redux/Actions/customerActions";

const CustomerStatementComponent = () => {
  const dispatch = useDispatch();
  const { loading, customer } = useSelector((state) => state.customer);
  const [accountNumber, setAccountNumber] = useState("");
  const customerStatement = (e) => {
    e.preventDefault();
    dispatch(getCustomer(accountNumber));
    setAccountNumber("");
  };
  console.log(customer);
  return (
    <div>
      <form onSubmit={customerStatement}>
        <div className="all__customer__heading">
          <input
            placeholder="Enter Account Number"
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <div className="statement__btn">
          <button>Submit</button>
        </div>
      </form>
      <div>
        <div></div>
        <div className="all__customer">
          <div>
            <h3>Date</h3>
          </div>
          <div>
            <h3>Narration</h3>
          </div>
          <div>
            <h3>Credit</h3>
          </div>
          <div>
            <h3>Debit</h3>
          </div>
          <div>
            <h3>Balance</h3>
          </div>
        </div>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          customer.map((cus) => (
            <div className="all__customer" key={cus._id}>
              <div>{cus.dateAndTime}</div>
              <div>{cus.narration}</div>
              <div>{cus.deposit}</div>
              <div>{cus.withdrawal}</div>
              <div>{cus.accountBalance}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CustomerStatementComponent;
