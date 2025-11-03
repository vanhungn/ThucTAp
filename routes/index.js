var express = require('express');
var router = express.Router();
const users = require('../controller/users')
const Client = require('../controller/client')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/client', Client.GetClient)
router.post("/login", users.Login)
router.post("/register", users.Register)

module.exports = router;
