const express = require("express");

const router = express.Router();
const auth = require("../middleware/authentication");

const {
    vaultAccountDeposit,
    vaultBankAccountDeposit,
    vaultBankAccountWithdrawal,
    vaultAccountWithdrawal,
    createNewVault,
} = require("../controller/vaultAccountController");

router.post("/", createNewVault);
router.post("/deposit", vaultAccountDeposit);
router.post("/bankwithdrawal", auth, vaultBankAccountDeposit);
router.post("/bankdeposit", auth, vaultBankAccountWithdrawal);
router.post("/withdrawal", vaultAccountWithdrawal);

module.exports = router;