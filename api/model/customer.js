const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    stateOfOrigin: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    accountNumber: {
        type: String,
        required: true,
    },
    photoAndSignature: {
        type: String,
    },
});

const customer = mongoose.model("customer", customerSchema);

module.exports = customer;