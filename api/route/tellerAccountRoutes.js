const express = require("express");

const router = express.Router();
const auth = require("../middleware/authentication");
const {
    createTellerAccount,
    tellerAccountDeposit,
    tellerAccountWithdrawal,
    tellerCustomerAccountDeposit,
    tellerCustomerAccountWithdrawal,
    tellerLoggedIn,
} = require("../controller/tellerAcountController");

router.post("/", createTellerAccount);
router.get("/", auth, tellerLoggedIn);
router.post("/deposit", auth, tellerAccountDeposit);
router.post("/customerdeposit", auth, tellerCustomerAccountDeposit);
router.post("/customerwithdrawal", tellerCustomerAccountWithdrawal);
router.post("/withdrawal", tellerAccountWithdrawal);

module.exports = router;