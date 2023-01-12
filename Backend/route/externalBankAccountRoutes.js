const express = require("express");

const router = express.Router();

const {
    externalBankAccountDeposit,
    externalBankAccountWithdrawal,
    createExternalBankAccount,
} = require("../controller/extenalBankController");

router.post("/", createExternalBankAccount);
router.post("/deposit", externalBankAccountDeposit);
router.post("/withdrawal", externalBankAccountWithdrawal);

module.exports = router;