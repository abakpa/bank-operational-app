const express = require("express");

const router = express.Router();

const {
    createTellerAccount,
    tellerAccountDeposit,
    tellerAccountWithdrawal,
    tellerCustomerAccountDeposit,
    tellerCustomerAccountWithdrawal,
} = require("../controller/tellerAcountController");

router.post("/", createTellerAccount);
router.post("/deposit", tellerAccountDeposit);
router.post("/customerdeposit", tellerCustomerAccountDeposit);
router.post("/customerwithdrawal", tellerCustomerAccountWithdrawal);
router.post("/withdrawal", tellerAccountWithdrawal);

module.exports = router;