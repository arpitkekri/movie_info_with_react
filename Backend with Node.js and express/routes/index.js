var express = require('express');
var axios = require('axios')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Option 1
  next() // passed forward not execute this function any more
  // Option 2
  res.send('Hello World'); // This will not print
});

router.get('/', function(req, res, next) {
  res.send('I am next');
});
router.get('/a', function(req, res, next) {
  res.send('I am needxt');
});

module.exports = router;
// returning router from this file