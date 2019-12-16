// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += "(burger_name, devoured) VALUES (?,?)" 
    console.log(queryString);
    console.log(vals);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(params, condition, cb) {
    console.log(params);
    console.log(condition);
    var queryString = "UPDATE burgers";
    queryString += " SET ";
    queryString += "devoured = 1";
    queryString += " WHERE "; 
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, params,function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
