import { useState } from "react";
import { useDispatch } from "react-redux";
import { createVault } from "../../redux/Actions/vaultActions";
import VaultLandingPageComponent from "../OperationsComponent/VaultLandingPageComponent";

const CreateVaultComponent = () => {
  const dispatch = useDispatch("");
  // const { loading } = useSelector((state) => state.vault);
  const [vaultBranch, setVaultBranch] = useState("");

  const createNewVault = (e) => {
    e.preventDefault();
    dispatch(createVault(vaultBranch));
  };
  return (
    <div className="dept">
      <div>
        <VaultLandingPageComponent />
      </div>
      <div>
        <form onSubmit={createNewVault}>
          <div className="login__center">
            <h2>Create Vault</h2>
            {/* {loading ? "loading..." : "Vault created"} */}
            <input
              value={vaultBranch}
              type="text"
              onChange={(e) => setVaultBranch(e.target.value)}
              placeholder="Branch Name"
            />
            <div className="login__btn">
              <button type="submit">Create Vault</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateVaultComponent;
