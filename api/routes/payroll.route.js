var express = require('express');
var router = express.Router();
const payrollController = require("../controllers/payroll.controller");
/* GET home page. */
router.get('/user/total', payrollController.getUserList);

module.exports = router;