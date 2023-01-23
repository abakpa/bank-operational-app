import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCustomer } from "../../redux/Actions/customerActions";

const ViewAllCustomer = () => {
  const dispatch = useDispatch();
  const { loading, customer } = useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(getAllCustomer());
  }, [dispatch]);
  console.log(customer);
  return (
    <div className="customer__welcome">
      <h2 className="all__customer__heading">All Customers</h2>
      <div className="all__customer">
        <div>
          <h3>Customer Name</h3>
        </div>
        <div>
          <h3>Account Number</h3>
        </div>
      </div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        customer.map(
          (cus) => (
            <div className="all__customer" key={cus._id}>
              <div>{cus.fullName}</div>
              <div>{cus.accountNumber}</div>
            </div>
          ),
          <div></div>
        )
      )}
    </div>
  );
};

export default ViewAllCustomer;
