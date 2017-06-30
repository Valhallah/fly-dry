var express = require("express");
const app = express();
var bodyParser = require("body-parser");
var db = require("../models");

var Location = db.Location;

var express = require('express')
var router = express.Router()

router.post('/location', function(req, res) {
  var locationData = req.body;
  db.Location.create({
    street: locationData.street,
    city: locationData.city,
    state: locationData.state,
    zip: locationData.zip
  }).then(function(data) {
    res.json(data);
  });
});

module.exports = router
