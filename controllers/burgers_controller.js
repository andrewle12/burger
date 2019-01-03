//dependencies
var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();




//creating routes

//index homepage
router.get("/index", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//adding a burger
router.post("/burger/add", function(req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect("/index");
  });
});

//eating a burger
router.post("/burger/eat/:id", function(req, res) {
  burger.updateOne(req.params.id, function() {
    res.redirect("/index");
  });
});

//exporting routes
module.exports = router;
