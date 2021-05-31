const personalModel = require("../models/hr/personal.model");

exports.getIndex = async(req, res, next) => {
    await personalModel.getPerson();
};