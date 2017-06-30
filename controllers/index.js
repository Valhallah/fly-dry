var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// profile route loads profile.html
router.get('/profile', function(req, res) {
  res.sendFile(path.join(__dirname, "../public/profile.html"));
});

router.get('/services', function(req, res) {
  res.sendFile(path.join(__dirname, "../public/services.html"));
});

router.get('/checkout', function(req, res) {
  res.sendFile(path.join(__dirname, "../public/checkout.html"));
});

module.exports = router;
