const mongoose = require("mongoose");

const vaultAccountSchema = new mongoose.Schema({
    tellerId: {
        type: Number,
        required: true,
    },
    tellerFullName: {
        type: String,
        required: true,
    },
    vaultAccountBalance: {
        type: Number,
        required: true,
    },
    deposit: {
        type: Number,
    },
    withdrawal: {
        type: Number,
    },
    narration: {
        type: String,
        required: true,
    },
});

const vaultAccount = mongoose.model("vaultAccount", vaultAccountSchema);

module.exports = vaultAccount;