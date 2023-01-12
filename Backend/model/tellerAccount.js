const mongoose = require("mongoose");

const tellerAccountSchema = new mongoose.Schema({
    tellerId: {
        type: Number,
        required: true,
    },
    tellerFullName: {
        type: String,
        required: true,
    },
    tellerAccountBalance: {
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

const tellerAccount = mongoose.model("tellerAccount", tellerAccountSchema);

module.exports = tellerAccount;