const mongoose = require("mongoose");

const externalBankWalletSchema = new mongoose.Schema({
    bankAccountNumber: {
        type: Number,
        required: true,
    },
    bankName: {
        type: String,
        required: true,
    },
    bankBalance: {
        type: Number,
        required: true,
    },
});

const externalBankWallet = mongoose.model(
    "externalBankWallet",
    externalBankWalletSchema
);

module.exports = externalBankWallet;