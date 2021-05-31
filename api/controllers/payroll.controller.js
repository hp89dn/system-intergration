const usersModel = require('../models/payroll/users.model');

exports.getUserList = async(req, res, next) => {
    try {
        const totalUser = await usersModel.getNewUsersTotal();
        res.status(200).json({
            total: totalUser
        })
    } catch (error) {
        res.status(401).json({ total: 0 });
    }

};