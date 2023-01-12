const express = require("express");

const router = express.Router();

const {
    vaultAccountDeposit,
    vaultBankAccountDeposit,
    vaultBankAccountWithdrawal,
    vaultAccountWithdrawal,
    createNewVault,
} = require("../controller/vaultAccountController");

router.post("/", createNewVault);
router.post("/deposit", vaultAccountDeposit);
router.post("/bankwithdrawal", vaultBankAccountDeposit);
router.post("/bankdeposit", vaultBankAccountWithdrawal);
router.post("/withdrawal", vaultAccountWithdrawal);

module.exports = router;