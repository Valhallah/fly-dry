var express = require("express");
const app = express();
var bodyParser = require("body-parser");
var stripe = require('stripe');
var db = require("../models");

var Purchase = db.Purchase;

var express = require('express')
var router = express.Router()

router.post('/purchase', function(req, res) {
  var purchaseData = req.body;
  db.Purchase.create({
    purchase_type: purchaseData.purchase_type,
    purchase_price: purchaseData.purchase_type.purchase_price,
    appt_date: purchaseData.appt_date,
    appt_time: purchaseData.appt_time
  }).then(function(data) {
    res.json(data);
    // console.log(data);
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
