const StaffDb = require("../model/staff");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const getAllStaff = async(req, res) => {
    try {
        const getStaffs = await StaffDb.find({});
        return res.json({ data: getStaffs });
    } catch (error) {
        res.json(error);
    }
};
const getStaff = async(req, res) => {
    try {
        const staffId = req.body.staffNumber;
        const getStaff = await StaffDb.findOne({ staffNumber: staffId });
        return res.json({ data: getStaff });
    } catch (error) {
        res.json(error);
    }
};
const createStaff = async(req, res) => {
    try {
        const getStaffs = await StaffDb.find({}).count();
        const code = getStaffs + 1;
        req.body.staffNumber = "mtn" + code;
        req.body.staffCode = "mtn" + Math.floor(Math.random() * 1000000);
        req.body.password = "password";
        req.body.userName = "username";
        req.body.registerationStatus = false;
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const staff = await StaffDb.create({...req.body });

        const outPut = `
        <p> Your login credentials have been created</p>
        <h3>Login credential</h3>
        <ul>
        <li>Staff Number: ${staff.staffNumber}</li>
        <li>Staff Code: ${staff.staffCode}</li>
        </ul>
        `;
        let transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "bdcd84b3176f78", // generated ethereal user
                pass: "dfd29841e87167", // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        let info = await transporter.sendMail({
            from: '"Abakpa Bank" <elachi4c@yahoo.com>', // sender address
            to: staff.email, // list of receivers
            subject: "Login credential", // Subject line
            text: `Hello ${staff.fullName}`, // plain text body
            html: outPut, // html body
        });
        res.json({ staff });
    } catch (error) {
        res.json(error);
    }
};

const updateStaff = async(req, res) => {
    try {
        req.body = {...req.body };
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

module.exports = { createStaff, getAllStaff, getStaff, updateStaff };