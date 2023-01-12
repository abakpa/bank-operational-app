const mongoose = require("mongoose");

const tellerWalletSchema = new mongoose.Schema({
    tellerId: {
        type: Number,
        required: true,
    },
    tellerBalance: {
        type: Number,
        required: true,
    },
    tellerFullName: {
        type: String,
        required: true,
    },
});

const tellerWallet = mongoose.model("tellerWallet", tellerWalletSchema);

module.exports = tellerWallet;