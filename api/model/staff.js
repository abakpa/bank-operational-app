const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    rank: {
        type: String,
        required: true,
    },
    discipline: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    registerationStatus: {
        type: Boolean,
        required: true,
    },
    staffNumber: {
        type: String,
        required: true,
    },
    staffCode: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    stateOfOrigin: {
        type: String,
        required: true,
    },
    maritalStatus: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const staff = mongoose.model("staff", staffSchema);

module.exports = staff;