const express = require("express");
const router = express.Router();

const { createHr, getAllHr } = require("../controller/hrController");

router.post("/", createHr);
router.get("/", getAllHr);

module.exports = router;