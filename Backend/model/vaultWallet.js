const mongoose = require("mongoose");

const vaultWalletSchema = new mongoose.Schema({
    vaultId: {
        type: Number,
        required: true,
    },
    vaultBranch: {
        type: String,
        required: true,
    },
    vaultBalance: {
        type: Number,
        required: true,
    },
});

const vaultWallet = mongoose.model("vaultWallet", vaultWalletSchema);

module.exports = vaultWallet;