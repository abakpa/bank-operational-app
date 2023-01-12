import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VaultLandingPageComponent = () => {
  const { login, loading } = useSelector((state) => state.login);
  console.log("login", login?.data.fullName);
  console.log("loading", loading);
  return (
    <div className="welcome">
      <h2>Welcome.....{!loading && login.data.fullName}</h2>
      <div>
        <Link to={"/createvault"}>Create Vault</Link>
      </div>
      <div>
        <Link to={"/vaultwithdrawal"}>Post vault to teller</Link>
      </div>
      <div>
        <Link to={"/vaultdeposit"}>Post teller to vault</Link>
      </div>
      <div>
        <Link to={"/vaultbankwithdrawalpage"}>Post bank to vault</Link>
      </div>
      <div>
        <Link to={"/vaultbankdepositpage"}>Post vault to bank</Link>
      </div>
    </div>
  );
};

export default VaultLandingPageComponent;
