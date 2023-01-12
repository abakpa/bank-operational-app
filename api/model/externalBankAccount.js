const mongoose = require("mongoose");

const externalBankAccountSchema = new mongoose.Schema({
    bankAccountNumber: {
        type: Number,
        required: true,
    },
    bankName: {
        type: String,
        required: true,
    },
    accountBalance: {
        type: Number,
        required: true,
    },
    deposit: {
        type: Number,
    },
    withdrawal: {
        type: Number,
    },
    staffName: {
        type: String,
        required: true,
    },
    narration: {
        type: String,
        required: true,
    },
});

const externalBankAccount = mongoose.model(
    "externalBankAccount",
    externalBankAccountSchema
);

module.exports = externalBankAccount;