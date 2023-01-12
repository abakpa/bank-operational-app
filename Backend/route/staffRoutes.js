const express = require("express");
const auth = require("../middleware/authentication");

const router = express.Router();

const {
    createStaff,
    getAllStaff,
    getStaff,
    updateStaff,
} = require("../controller/staffController");

router.post("/", createStaff);
router.get("/", getAllStaff);
router.post("/single", getStaff);
router.put("/:id", updateStaff);

module.exports = router;