var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([
      {name:1,age:111},
      {name:2,age:222},
  ]);
});

module.exports = router;
