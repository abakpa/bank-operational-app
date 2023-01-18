import { useState } from "react";
import { useDispatch } from "react-redux";
import { tellerWithdrawalVault } from "../../redux/Actions/vaultActions";

const VaultWithdrawalComponent = () => {
  const dispatch = useDispatch();
  // const { loading, vault } = useSelector((state) => state.vault);
  const [tellerId, setTellerId] = useState("");
  const [vaultId, setVaultId] = useState("");
  const [withdrawal, setWithdrawal] = useState("");
  const [narration, setNarration] = useState("");

  const tellerWithdrawalFromVault = (e) => {
    e.preventDefault();
    const postVault = {
      tellerId,
      vaultId,
      withdrawal,
      narration,
    };
    dispatch(tellerWithdrawalVault(postVault));
  };
  return (
    <div>
      <div>
        <form onSubmit={tellerWithdrawalFromVault}>
          <div className="login__center">
            <h2>Withdraw from Vault</h2>
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
              value={withdrawal}
              onChange={(e) => setWithdrawal(e.target.value)}
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

export default VaultWithdrawalComponent;
