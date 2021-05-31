var express = require('express');
var router = express.Router();
const hrController = require("../controllers/hr.controller");
/* GET home page. */
router.get('/', hrController.getIndex);

module.exports = router;