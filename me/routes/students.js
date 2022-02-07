var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('student route works');
});

module.exports = router;
