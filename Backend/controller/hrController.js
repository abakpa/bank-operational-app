const HrDb = require("../model/hr");

const createHr = async(req, res) => {
    try {
        const hr = await HrDb.create({...req.body });
        res.json({ hr });
    } catch (error) {
        res.json(error);
    }
};

const getAllHr = async(req, res) => {
    try {
        const allHr = await HrDb.find({});
        res.json(allHr);
    } catch (error) {
        res.json(error);
    }
};
module.exports = { createHr, getAllHr };