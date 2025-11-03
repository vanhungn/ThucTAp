var express = require('express');
var router = express.Router();
const Client = require('../controller/client')

router.get('/',Client.GetClient)
module.exports = router;
