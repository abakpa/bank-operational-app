import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TellerLandingPageComponent = () => {
  const { login, loading } = useSelector((state) => state.login);
  console.log("login", login?.data.fullName);
  console.log("loading", loading);
  return (
    <div className="welcome">
      <h2>Welcome.....{!loading && login.data.fullName}</h2>
      <h3>Teller Operations</h3>
      <div>
        <Link to={"/createteller"}>Create Teller</Link>
      </div>
      <div>
        <Link to={"/customerdepositpage"}>Post Deposit</Link>
      </div>
      <div>
        <Link to={"/customerwithdrawalpage"}>Post Withdrawal</Link>
      </div>
      {/* <div>
        <Link to={"/vaultdeposit"}>Post to Vault</Link>
      </div> */}
    </div>
  );
};

export default TellerLandingPageComponent;
