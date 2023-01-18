const mongoose = require("mongoose");

const tellerWalletSchema = new mongoose.Schema({
    tellerId: {
        type: Number,
        required: true,
    },
    staffId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "staff",
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