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
    <div>
      <h2>All Customers</h2>
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
