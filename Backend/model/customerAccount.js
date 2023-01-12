const mongoose = require("mongoose");

const customerAccountSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },

    accountNumber: {
        type: String,
        required: true,
    },
    deposit: {
        type: Number,
        required: true,
    },
    withdrawal: {
        type: Number,
        required: true,
    },
    accountBalance: {
        type: Number,
        required: true,
    },
    narration: {
        type: String,
        required: true,
    },
    dateAndTime: {
        type: String,
    },
});

const customerAccount = mongoose.model(
    "customerAccount",
    customerAccountSchema
);

module.exports = customerAccount;