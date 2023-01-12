const vaultWallet = require("../model/vaultWallet");
const vaultAccount = require("../model/vaultAccount");
const tellerAccount = require("../model/tellerAccount");
const tellerWallet = require("../model/tellerWallet");
const externalBankAccount = require("../model/externalBankAccount");
const externalBankWallet = require("../model/externalBankWallet");

const createNewVault = async(req, res) => {
    try {
        const vaultId = await vaultWallet.find({}).count();
        const newVaultId = vaultId + 1;
        req.body.vaultId = newVaultId;
        req.body.vaultBalance = 0;
        const createVaultWallet = await vaultWallet.create({...req.body });
        res.json(createVaultWallet);
    } catch (error) {
        res.json(error);
    }
};

const vaultAccountDeposit = async(req, res) => {
    try {
        const tellerId = req.body.tellerId;
        const vaultTellerDeposit = await tellerAccount.findOne({ tellerId });
        const vaultId = req.body.vaultId;
        const getVaultBalance = await vaultWallet.findOne({ vaultId });
        const currentVaultBalance = getVaultBalance.vaultBalance;
        req.body.vaultBalance =
            parseFloat(currentVaultBalance) + parseFloat(req.body.deposit);
        const bal = await vaultWallet.findOneAndUpdate({ vaultId: vaultId }, { $set: { vaultBalance: req.body.vaultBalance } }, {
            new: true,
            runValidators: true,
        });
        req.body.vaultAccountBalance = bal.vaultBalance;
        req.body.withdrawal = 0;
        req.body.tellerFullName = vaultTellerDeposit.tellerFullName;
        const vaultTransactionAccount = await vaultAccount.create({
            ...req.body,
        });
        const getTellerBalance = await tellerWallet.findOne({ tellerId });
        const currentTellerBalance = getTellerBalance.tellerBalance;
        req.body.tellerBalance =
            parseFloat(currentTellerBalance) - parseFloat(req.body.deposit);
        const tellerBal = await tellerWallet.findOneAndUpdate({ tellerId: tellerId }, { $set: { tellerBalance: req.body.tellerBalance } }, {
            new: true,
            runValidators: true,
        });
        req.body.tellerAccountBalance = tellerBal.tellerBalance;
        req.body.tellerId = tellerId;
        req.body.deposit = 0;
        req.body.withdrawal = vaultTransactionAccount.deposit;
        const tellerTransactionAccount = await tellerAccount.create({
            ...req.body,
        });
        res.json({
            message: "Transaction successful",
            vaultBalance: vaultTransactionAccount,
            tellerAccount: tellerTransactionAccount,
        });
    } catch (error) {
        res.json(error);
    }
};

const vaultAccountWithdrawal = async(req, res) => {
    try {
        const tellerId = req.body.tellerId;
        const vaultTellerWithdrawal = await tellerAccount.findOne({ tellerId });
        const vaultId = req.body.vaultId;
        const getVaultBalance = await vaultWallet.findOne({ vaultId });
        const currentVaultBalance = getVaultBalance.vaultBalance;
        if (currentVaultBalance < req.body.withdrawal) {
            res.json("Insufficient balance");
        } else {
            req.body.vaultBalance =
                parseFloat(currentVaultBalance) - parseFloat(req.body.withdrawal);
            const bal = await vaultWallet.findOneAndUpdate({ vaultId: vaultId }, { $set: { vaultBalance: req.body.vaultBalance } }, {
                new: true,
                runValidators: true,
            });
            req.body.vaultAccountBalance = bal.vaultBalance;
            req.body.deposit = 0;
            req.body.tellerFullName = vaultTellerWithdrawal.tellerFullName;
            const vaultTransactionAccount = await vaultAccount.create({
                ...req.body,
            });
            const getTellerBalance = await tellerWallet.findOne({ tellerId });
            const currentTellerBalance = getTellerBalance.tellerBalance;
            req.body.tellerBalance =
                parseFloat(currentTellerBalance) + parseFloat(req.body.withdrawal);
            const tellerBal = await tellerWallet.findOneAndUpdate({ tellerId: tellerId }, { $set: { tellerBalance: req.body.tellerBalance } }, {
                new: true,
                runValidators: true,
            });
            req.body.tellerAccountBalance = tellerBal.tellerBalance;
            req.body.tellerId = tellerId;
            req.body.withdrawal = 0;
            req.body.deposit = vaultTransactionAccount.withdrawal;
            const tellerTransactionAccount = await tellerAccount.create({
                ...req.body,
            });
            res.json({
                vaultBalance: vaultTransactionAccount,
                tellerAccount: tellerTransactionAccount,
            });
        }
    } catch (error) {
        res.json(error);
    }
};

const vaultBankAccountDeposit = async(req, res) => {
    try {
        const bankAccountNumber = req.body.bankAccountNumber;
        const getBankDetails = await externalBankWallet.findOne({
            bankAccountNumber,
        });
        const currentBankBalance = getBankDetails.bankBalance;
        if (currentBankBalance < req.body.withdrawal) {
            res.json("Insufficient balance");
        } else {
            req.body.newBankBalance =
                parseFloat(currentBankBalance) - parseFloat(req.body.withdrawal);
            const bal = await externalBankWallet.findOneAndUpdate({ bankAccountNumber: bankAccountNumber }, { $set: { bankBalance: req.body.newBankBalance } }, {
                new: true,
                runValidators: true,
            });
            req.body.accountBalance = bal.bankBalance;
            req.body.bankName = getBankDetails.bankName;
            req.body.deposit = 0;
            const bankTransactionAccount = await externalBankAccount.create({
                ...req.body,
            });
            const tellerId = req.body.tellerId;
            const vaultTellerDeposit = await tellerAccount.findOne({ tellerId });
            const vaultId = req.body.vaultId;
            const getVaultBalance = await vaultWallet.findOne({ vaultId });
            const currentVaultBalance = getVaultBalance.vaultBalance;
            req.body.vaultBalance =
                parseFloat(currentVaultBalance) + parseFloat(req.body.withdrawal);
            const vaultBal = await vaultWallet.findOneAndUpdate({ vaultId: vaultId }, { $set: { vaultBalance: req.body.vaultBalance } }, {
                new: true,
                runValidators: true,
            });
            req.body.vaultAccountBalance = vaultBal.vaultBalance;
            req.body.withdrawal = 0;
            req.body.deposit = bankTransactionAccount.withdrawal;
            req.body.tellerFullName = vaultTellerDeposit.tellerFullName;
            const vaultTransactionAccount = await vaultAccount.create({
                ...req.body,
            });
            res.json({
                vaultBalance: vaultTransactionAccount,
                bankBalance: bankTransactionAccount,
            });
        }
    } catch (error) {
        res.json(error);
    }
};

const vaultBankAccountWithdrawal = async(req, res) => {
    try {
        const tellerId = req.body.tellerId;
        const vaultTellerWithdrawal = await tellerAccount.findOne({
            tellerId,
        });
        const vaultId = req.body.vaultId;
        const getVaultBalance = await vaultWallet.findOne({ vaultId });
        const currentVaultBalance = getVaultBalance.vaultBalance;
        if (currentVaultBalance < req.body.withdrawal) {
            res.json("Insufficient balance");
        } else {
            req.body.vaultBalance =
                parseFloat(currentVaultBalance) - parseFloat(req.body.withdrawal);
            const vaultBal = await vaultWallet.findOneAndUpdate({ vaultId: vaultId }, { $set: { vaultBalance: req.body.vaultBalance } }, {
                new: true,
                runValidators: true,
            });
            req.body.vaultAccountBalance = vaultBal.vaultBalance;
            req.body.deposit = 0;
            req.body.tellerFullName = vaultTellerWithdrawal.tellerFullName;
            const vaultTransactionAccount = await vaultAccount.create({
                ...req.body,
            });
            const bankAccountNumber = req.body.bankAccountNumber;
            const getBankDetails = await externalBankWallet.findOne({
                bankAccountNumber,
            });
            const currentBankBalance = getBankDetails.bankBalance;
            req.body.newBankBalance =
                parseFloat(currentBankBalance) + parseFloat(req.body.withdrawal);
            const bal = await externalBankWallet.findOneAndUpdate({ bankAccountNumber: bankAccountNumber }, { $set: { bankBalance: req.body.newBankBalance } }, {
                new: true,
                runValidators: true,
            });
            req.body.accountBalance = bal.bankBalance;
            req.body.bankName = getBankDetails.bankName;
            req.body.withdrawal = 0;
            req.body.deposit = vaultTransactionAccount.withdrawal;
            const bankTransactionAccount = await externalBankAccount.create({
                ...req.body,
            });
            res.json({
                vaultBalance: vaultTransactionAccount,
                bankBalance: bankTransactionAccount,
            });
        }
    } catch (error) {
        res.json(error);
    }
};

module.exports = {
    vaultAccountDeposit,
    vaultAccountWithdrawal,
    createNewVault,
    vaultBankAccountDeposit,
    vaultBankAccountWithdrawal,
};