var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


router.get("/", function(req, res) {
    // burger.all() - > make a database call to retrieve all burgers
    // burger.all() takes in a callback function and passes in data so capture the table data coming back from the database
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.table(data)
      // express knows to look for index.handlers because the view engine is set to .handlebar files
      // when sending data back to a .handlebars file, we need to send it back as an object
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create([
      "name", "devour"
    ], [
      req.body.name, req.body.devour
    ], function(result) {
      res.json(true);
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devour: req.body.devour
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;
 
