var express = require('express');
var path = require('path');
var router = express.Router();

// It's routing time
router.use('/steam', require('./steam'));


router.get('/', function(req, res) {
  req.app.locals.test = 'local variable test';
  res.render('index');
});

module.exports = router;
