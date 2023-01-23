const customer = require("../model/customer");
const customerWallet = require("../model/customerWallet");
const customerAccount = require("../model/customerAccount");

const createCustomer = async(req, res) => {
    try {
        req.body.accountNumber = "002" + Math.floor(Math.random() * 10000000);
        let data = {...req.body };

        if (req.file) {
            data = {
                ...req.body,
                photoAndSignature: "/uploads/images/" + req.file.filename,
            };
        }
        const customerDetail = await customer.create(data);
        req.body.accountBalance = 0;
        req.body.accountNumber = customerDetail.accountNumber;
        const createWallet = await customerWallet.create({...req.body });
        req.body.deposit = 0;
        req.body.withdrawal = 0;
        const date = new Date().toLocaleString();
        req.body.dateAndTime = date;
        req.body.narration = "Account is newly created";
        const createAccount = await customerAccount.create({...req.body });
        res.json({
            customerDetail: customerDetail,
            customerWallet: createWallet,
            customerAccount: createAccount,
        });
    } catch (error) {
        res.json(error);
    }
};

const getAllCustomer = async(req, res) => {
    try {
        const allCustomer = await customer.find({});
        res.json(allCustomer);
    } catch (error) {
        res.json(error);
    }
};
const getCustomer = async(req, res) => {
    try {
        const accountNumber = req.body.accountNumber;
        const singleCustomerTransaction = await customerAccount.find({
            accountNumber,
        });
        const singleCustomerBalance = await customerWallet.findOne({
            accountNumber,
        });
        res.json({
            transaction: singleCustomerTransaction,
            balance: singleCustomerBalance,
        });
    } catch (error) {
        res.json(error);
    }
};

const updateCustomer = async(req, res) => {
    try {
        const customerId = req.params.id;
        let bodyData = {...req.body };
        if (req.file) {
            bodyData = {
                ...req.body,
                photoAndSignature: "/uploads/images/" + req.file.filename,
            };
        }
        const customerUpdate = await customer.findByIdAndUpdate(
            customerId,
            bodyData, {
                new: true,
                runValidators: true,
            }
        );
        res.json({ message: customerUpdate });
    } catch (error) {
        res.json(error);
    }
};

module.exports = {
    createCustomer,
    updateCustomer,
    getAllCustomer,
    getCustomer,
};