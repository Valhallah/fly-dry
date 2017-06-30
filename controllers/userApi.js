var express = require("express");
const app = express();
var bodyParser = require("body-parser");
var db = require("../models");

var User = db.User;

var express = require('express')
var router = express.Router()

router.post('/users', function(req, res) {
  var userData = req.body;
  db.User.create({
    name: userData.name,
    dob: userData.dob,
    email: userData.email,
    password: userData.password
  }).then(function(data) {
    res.json(data);
  });
});
// router.get("/users/:id", function(req, res) {
//   db.User.findOne({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(user) {
//     res.json(user);
//   });
//
// });


// router.put("/users", function(req, res) {
// db.User.update(req.body,
//   {
//     where: {
//       id: req.body.id
//     }
//   })
// .then(function(userData) {
//   res.json(UserData);
// });
// });

module.exports = router
