const externalBankAccount = require("../model/externalBankAccount");
const externalBankWallet = require("../model/externalBankWallet");

const createExternalBankAccount = async(req, res) => {
    try {
        const externalAccount = await externalBankWallet.find({}).count();
        const newBankAccount =
            externalAccount + Math.floor(Math.random() * 1000000);
        req.body.bankAccountNumber = newBankAccount;
        req.body.deposit = 0;
        req.body.withdrawal = 0;
        req.body.accountBalance = 0;
        req.body.narration = "Newly created bank account";
        const newExBankAccount = await externalBankAccount.create({...req.body });
        req.body.bankAccountNumber = newExBankAccount.bankAccountNumber;
        req.body.bankBalance = 0;
        const newExBankWallet = await externalBankWallet.create({...req.body });
        res.json({ data: newExBankWallet });
    } catch (error) {
        res.json(error);
    }
};
const externalBankAccountDeposit = async(req, res) => {
    try {
        const bankAccountNumber = req.body.bankAccountNumber;
        const getBankDetails = await externalBankWallet.findOne({
            bankAccountNumber,
        });
        const currentBankBalance = getBankDetails.bankBalance;
        req.body.newBankBalance =
            parseFloat(currentBankBalance) + parseFloat(req.body.deposit);
        const bal = await externalBankWallet.findOneAndUpdate({ bankAccountNumber: bankAccountNumber }, { $set: { bankBalance: req.body.newBankBalance } }, {
            new: true,
            runValidators: true,
        });
        req.body.accountBalance = bal.bankBalance;
        req.body.bankName = getBankDetails.bankName;
        req.body.withdrawal = 0;
        const bankTransactionAccount = await externalBankAccount.create({
            ...req.body,
        });
        res.json(bankTransactionAccount);
    } catch (error) {
        res.json(error);
    }
};

const externalBankAccountWithdrawal = async(req, res) => {
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
            res.json(bankTransactionAccount);
        }
    } catch (error) {
        res.json(error);
    }
};
module.exports = {
    createExternalBankAccount,
    externalBankAccountDeposit,
    externalBankAccountWithdrawal,
};