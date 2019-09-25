var orm = require("../config/orm.js");

var burger = {
    // burger.all() - > make a database call to retrieve all burgers
  all: function(cb) {
    // orm.all() - > make a database call to retrieve all burgers
    // orm.all -> takes in 2 arguments, the table name and a callback function for when the data is returned
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
