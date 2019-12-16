// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(vals, cb) {
    console.log(vals);
    orm.create("burgers", vals, function(res) {
      cb(res);
    });
  },
  update: function(value, condition, cb) {
    orm.update(value, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
