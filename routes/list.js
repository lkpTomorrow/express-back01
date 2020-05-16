var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var json = require('../public/json/product-detail.json');
    // res.jsonp(json);
  res.send(json);
});

module.exports = router;
