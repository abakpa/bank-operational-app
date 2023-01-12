import { useState } from "react";
import { useDispatch } from "react-redux";
import { vaultToBankWithdrawal } from "../../redux/Actions/vaultActions";

const VaultBankDepositComponent = () => {
  const dispatch = useDispatch();
  const [tellerId, setTellerId] = useState("");
  const [vaultId, setVaultId] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [staffName, setStaffName] = useState("");
  const [withdrawal, setWithdrawal] = useState("");
  const [narration, setNarration] = useState("");

  const vaultPostToBank = (e) => {
    e.preventDefault();
    const postBankDeposit = {
      tellerId,
      vaultId,
      bankAccountNumber,
      staffName,
      withdrawal,
      narration,
    };
    dispatch(vaultToBankWithdrawal(postBankDeposit));
    setTellerId("");
    setVaultId("");
    setBankAccountNumber("");
    setStaffName("");
    setWithdrawal("");
    setNarration("");
  };
  return (
    <div>
      <div>
        <form onSubmit={vaultPostToBank}>
          <div className="login__center">
            <h2>Bank to vault</h2>
            <input
              type="text"
              value={tellerId}
              onChange={(e) => setTellerId(e.target.value)}
              placeholder="Teller Id"
            />
            <input
              type="text"
              value={staffName}
              onChange={(e) => setStaffName(e.target.value)}
              placeholder="Staff name"
            />

            <input
              type="text"
              value={vaultId}
              onChange={(e) => setVaultId(e.target.value)}
              placeholder="Branch Code"
            />
            <input
              type="text"
              value={bankAccountNumber}
              onChange={(e) => setBankAccountNumber(e.target.value)}
              placeholder="Bank account number"
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

export default VaultBankDepositComponent;
