const mongoose = require("mongoose");

const HrSchema = new mongoose.Schema({
    department: {
        type: String,
    },
    rank: {
        type: String,
    },
    role: {
        type: String,
    },
});

const Hr = mongoose.model("hr", HrSchema);

module.exports = Hr;