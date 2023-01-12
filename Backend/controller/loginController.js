const StaffDb = require("../model/staff");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateCredentials = async(req, res) => {
    try {
        const { staffNumber, staffCode } = req.body;
        const checkLogin = await StaffDb.findOne({
            staffNumber,
            staffCode,
        });
        if (!checkLogin) {
            return res.json("Wrong login credentials...");
        }
        if (checkLogin.registerationStatus === false) {
            return res.json({
                Message: "Generate credentials...",
                Data: { checkLogin },
            });
        } else {
            res.json("Credentials has already been generated...");
        }
    } catch (error) {
        res.json(error);
    }
};

const createLoginCredentials = async(req, res) => {
    try {
        req.body = {...req.body };
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        req.body.registerationStatus = true;
        const staffId = req.params.id;
        const updateStaff = await StaffDb.findByIdAndUpdate(staffId, req.body, {
            new: true,
            runValidators: true,
        });
        return res.json({ updateStaff });
    } catch (error) {
        res.json(error);
    }
};

const staffLogin = async(req, res) => {
    try {
        const { userName, password } = req.body;
        const staffLogin = await StaffDb.findOne({
            userName,
        });
        if (!staffLogin) {
            // return res.json({ message: "Wrong login details..." });
            throw new Error("Wrong login details...");
        }

        const validPassword = await bcrypt.compare(password, staffLogin.password);
        if (!validPassword) {
            // return res.json({ message: "wrong login details..." });
            throw new Error("Wrong login details...");
        }

        const token = jwt.sign({ id: staffLogin._id, userName: staffLogin.userName },
            process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_LIFETIME }
        );
        return res.json({ data: staffLogin, token: token });
    } catch (error) {
        return res.status(400).send({ msg: error.message });
    }
};

module.exports = { generateCredentials, createLoginCredentials, staffLogin };