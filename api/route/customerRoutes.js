const express = require("express");
const {
    createCustomer,
    updateCustomer,
    getAllCustomer,
    getCustomer,
} = require("../controller/customerController");
const multer = require("multer");

const router = express.Router();
const auth = require("../middleware/authentication");

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

router.post("/", auth, upload.single("photoAndSignature"), createCustomer);
router.get("/", getAllCustomer);
router.post("/single", getCustomer);
router.put("/:id", upload.single("photoAndSignature"), updateCustomer);

module.exports = router;