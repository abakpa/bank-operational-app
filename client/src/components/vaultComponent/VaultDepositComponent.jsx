import { useState } from "react";
import { useDispatch } from "react-redux";
import { tellerPostVault } from "../../redux/Actions/vaultActions";

const VaultDepositComponent = () => {
  const dispatch = useDispatch();
  // const { loading, vault } = useSelector((state) => state.vault);
  const [tellerId, setTellerId] = useState("");
  const [vaultId, setVaultId] = useState("");
  const [deposit, setDeposit] = useState("");
  const [narration, setNarration] = useState("");

  const tellerPostToVault = (e) => {
    e.preventDefault();
    const postVault = {
      tellerId,
      vaultId,
      deposit,
      narration,
    };
    dispatch(tellerPostVault(postVault));
  };
  return (
    <div>
      <div>
        <form onSubmit={tellerPostToVault}>
          <div className="login__center">
            <h2>Deposit to Vault</h2>
            <input
              type="text"
              value={tellerId}
              onChange={(e) => setTellerId(e.target.value)}
              placeholder="Teller Id"
            />
            <input
              type="text"
              value={vaultId}
              onChange={(e) => setVaultId(e.target.value)}
              placeholder="Vault Code"
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
              placeholder="Naration"
            />
            <div className="login__btn">
              <button type="submit">Post Vault</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VaultDepositComponent;
