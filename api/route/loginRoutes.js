const express = require("express");

const router = express.Router();
const auth = require("../middleware/authentication");
const {
    generateCredentials,
    createLoginCredentials,
    staffLogin,
} = require("../controller/loginController");

router.post("/", generateCredentials);
router.put("/:id", createLoginCredentials);
router.post("/login", staffLogin);

module.exports = router;