const express = require("express");
const {
    createCustomer,
    updateCustomer,
    getAllCustomer,
    getCustomer,
} = require("../controller/customerController");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "public/uploads/images");
    },
    filename: function(req, file, callback) {
        callback(null, Date.now() + file.originalname.replace(" ", ""));
    },
});

const upload = multer({
    storage: storage,
});

router.post("/", upload.single("photoAndSignature"), createCustomer);
router.get("/", getAllCustomer);
router.get("/:id", getCustomer);
router.put("/:id", upload.single("photoAndSignature"), updateCustomer);

module.exports = router;