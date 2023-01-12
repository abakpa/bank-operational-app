const mongoose = require("mongoose");

const customerWalletSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },

    accountNumber: {
        type: String,
        required: true,
    },
    accountBalance: {
        type: Number,
    },
});

const customerWallet = mongoose.model("customerWallet", customerWalletSchema);

module.exports = customerWallet;