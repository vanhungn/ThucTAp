var express = require('express');
var router = express.Router();
const users = require('../controller/users')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/login", users.Login)
router.post("/register", users.Register)
module.exports = router;
