const tellerAccount = require("../model/tellerAccount");
const tellerWallet = require("../model/tellerWallet");
const StaffDb = require("../model/staff");
const CustomerDb = require("../model/customer");
const customerWallet = require("../model/customerWallet");
const customerAccount = require("../model/customerAccount");

const createTellerAccount = async(req, res) => {
    try {
        const staffNumber = req.body.staffNumber;
        const staffTeller = await StaffDb.findOne({ staffNumber });

        const tellerId = await tellerWallet.find({}).count();
        const newTellerId = tellerId + 1;
        req.body.tellerId = newTellerId;
        req.body.deposit = 0;
        req.body.withdrawal = 0;
        req.body.tellerAccountBalance = 0;
        req.body.tellerFullName = staffTeller.fullName;
        req.body.staffId = staffTeller._id;
        req.body.narration = "Newly created";
        const newTellerAccount = await tellerAccount.create({...req.body });
        // console.log(newTellerAccount.tellerId);
        req.body.tellerId = newTellerAccount.tellerId;
        req.body.tellerBalance = 0;
        req.body.tellerFullName = newTellerAccount.tellerFullName;
        req.body.staffId = staffTeller._id;
        const newTellerWallet = await tellerWallet.create({...req.body });
        res.json({ data: newTellerWallet });
    } catch (error) {
        res.json(error);
    }
};

const tellerLoggedIn = async(req, res) => {
    try {
        const tellerStaffId = req.staff.staffId;
        const checkTeller = await tellerWallet.findOne({ staffId: tellerStaffId });
        if (!checkTeller) {
            return res.json({ msg: "You don't have teller right" });
        }
        res.json({ data: checkTeller });
    } catch (error) {
        res.json(error);
    }
};
const tellerAccountDeposit = async(req, res) => {
    try {
        const tellerStaffId = req.staff.staffId;
        const checkTeller = await tellerWallet.findOne({
            staffId: tellerStaffId,
        });
        if (!checkTeller) {
            return res.json({ msg: "You don't have teller right" });
        }
        const tellerId = checkTeller.tellerId;
        const getTellerBalance = await tellerWallet.findOne({ tellerId });
        const currentTellerBalance = getTellerBalance.tellerBalance;
        req.body.tellerBalance =
            parseFloat(currentTellerBalance) + parseFloat(req.body.deposit);
        const bal = await tellerWallet.findOneAndUpdate({ tellerId: tellerId }, { $set: { tellerBalance: req.body.tellerBalance } }, {
            new: true,
            runValidators: true,
        });
        req.body.tellerAccountBalance = bal.tellerBalance;
        req.body.tellerId = tellerId;
        req.body.withdrawal = 0;
        const tellerTransactionAccount = await tellerAccount.create({
            ...req.body,
        });
        res.json(tellerTransactionAccount);
    } catch (error) {
        res.json(error);
    }
};

const tellerAccountWithdrawal = async(req, res) => {
    try {
        const tellerId = req.body.tellerId;
        const tellerBalance = await tellerWallet.findOne({ tellerId });
        const balance = tellerBalance.tellerBalance;
        if (balance < req.body.withdrawal) {
            return res.json("Insuficient balance");
        }
        req.body.tellerBalance =
            parseFloat(tellerBalance.tellerBalance) - parseFloat(req.body.withdrawal);
        const bal = await tellerWallet.findOneAndUpdate({ tellerId: tellerId }, { $set: { tellerBalance: req.body.tellerBalance } }, {
            new: true,
            runValidators: true,
        });
        req.body.tellerAccountBalance = bal.tellerBalance;
        req.body.deposit = 0;
        const viewTellerAccount = await tellerAccount.create({...req.body });
        res.json(viewTellerAccount);
    } catch (error) {
        res.json(error);
    }
};

const tellerCustomerAccountDeposit = async(req, res) => {
    try {
        const tellerStaffId = req.staff.staffId;
        const checkTeller = await tellerWallet.findOne({
            staffId: tellerStaffId,
        });
        if (!checkTeller) {
            return res.json({ msg: "You don't have teller right" });
        }
        const tellerId = checkTeller.tellerId;
        const customerAccountNumber = req.body.accountNumber;
        const getCustomerDetails = await customerWallet.findOne({
            accountNumber: customerAccountNumber,
        });
        req.body.fullName = getCustomerDetails.fullName;
        req.body.tellerFullName = getCustomerDetails.fullName;
        req.body.staffId = tellerStaffId;
        req.body.tellerId = tellerId;
        const currentCustomerBalance = getCustomerDetails.accountBalance;

        req.body.newAccountBalance =
            parseFloat(currentCustomerBalance) + parseFloat(req.body.deposit);
        const bal = await customerWallet.findOneAndUpdate({ accountNumber: customerAccountNumber }, { $set: { accountBalance: req.body.newAccountBalance } }, {
            new: true,
            runValidators: true,
        });
        req.body.accountBalance = bal.accountBalance;
        req.body.withdrawal = 0;
        const date = new Date().toLocaleString();
        req.body.dateAndTime = date;
        const customerTransactionAccount = await customerAccount.create({
            ...req.body,
        });
        // const tellerId = checkTeller.tellerId;
        const getTellerBalance = await tellerWallet.findOne({ tellerId });
        const currentTellerBalance = getTellerBalance.tellerBalance;
        req.body.tellerBalance =
            parseFloat(currentTellerBalance) + parseFloat(req.body.deposit);
        const tellerBal = await tellerWallet.findOneAndUpdate({ tellerId: tellerId }, { $set: { tellerBalance: req.body.tellerBalance } }, {
            new: true,
            runValidators: true,
        });
        req.body.tellerAccountBalance = tellerBal.tellerBalance;
        req.body.withdrawal = 0;
        req.body.tellerFullName = tellerBal.tellerFullName;
        const tellerTransactionAccount = await tellerAccount.create({
            ...req.body,
        });
        res.json({
            customerAccount: customerTransactionAccount,
            tellerAccount: tellerTransactionAccount,
        });
    } catch (error) {
        res.json(error);
    }
};

const tellerCustomerAccountWithdrawal = async(req, res) => {
    try {
        const tellerStaffId = req.staff.staffId;
        const checkTeller = await tellerWallet.findOne({
            staffId: tellerStaffId,
        });
        if (!checkTeller) {
            return res.json({ msg: "You don't have teller right" });
        }
        const tellerId = checkTeller.tellerId;
        req.body.staffId = tellerStaffId;
        req.body.tellerId = tellerId;
        const customerAccountNumber = req.body.accountNumber;
        const getCustomerDetails = await customerWallet.findOne({
            accountNumber: customerAccountNumber,
        });
        const currentCustomerBalance = getCustomerDetails.accountBalance;
        if (currentCustomerBalance < req.body.withdrawal) {
            res.json("Insufficient balance");
        } else {
            req.body.fullName = getCustomerDetails.fullName;
            req.body.tellerFullName = getCustomerDetails.fullName;
            req.body.newAccountBalance =
                parseFloat(currentCustomerBalance) - parseFloat(req.body.withdrawal);
            const bal = await customerWallet.findOneAndUpdate({ accountNumber: customerAccountNumber }, { $set: { accountBalance: req.body.newAccountBalance } }, {
                new: true,
                runValidators: true,
            });
            req.body.accountBalance = bal.accountBalance;
            req.body.deposit = 0;
            const date = new Date().toLocaleString();
            req.body.dateAndTime = date;
            const customerTransactionAccount = await customerAccount.create({
                ...req.body,
            });

            // const tellerId = req.body.tellerId;
            const getTellerBalance = await tellerWallet.findOne({ tellerId });
            const currentTellerBalance = getTellerBalance.tellerBalance;
            if (currentTellerBalance < req.body.withdrawal) {
                return res.json("Insufficient till balance");
            } else {
                req.body.tellerBalance =
                    parseFloat(currentTellerBalance) - parseFloat(req.body.withdrawal);
                const tellerBal = await tellerWallet.findOneAndUpdate({ tellerId: tellerId }, { $set: { tellerBalance: req.body.tellerBalance } }, {
                    new: true,
                    runValidators: true,
                });
                req.body.tellerAccountBalance = tellerBal.tellerBalance;
                req.body.tellerFullName = tellerBal.tellerFullName;
                req.body.deposit = 0;
                const tellerTransactionAccount = await tellerAccount.create({
                    ...req.body,
                });
                res.json({
                    customerAccount: customerTransactionAccount,
                    tellerAccount: tellerTransactionAccount,
                });
            }
        }
    } catch (error) {
        res.json(error);
    }
};
module.exports = {
    createTellerAccount,
    tellerLoggedIn,
    tellerAccountDeposit,
    tellerAccountWithdrawal,
    tellerCustomerAccountDeposit,
    tellerCustomerAccountWithdrawal,
};