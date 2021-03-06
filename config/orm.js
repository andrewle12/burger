// import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  //selectAll method to retrieve all burgers
  selectAll: function(cb) {
    connection.query("SELECT * FROM burgers", function(err, result) {
      if (err) {
          throw err;
      }
      cb(result);
    });
  },

  //insertOne method to add a new burger
  insertOne: function(burger_name, cb) {
    connection.query( "INSERT INTO burgers SET ?",
     { burger_name: burger_name, devoured: false },
      function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
      }
    );
  },

  //updateOne to update a burger to devoured
  updateOne: function(burgerID, cb) {
    connection.query("UPDATE burgers SET ? WHERE ?",
      [{ devoured: true }, { id: burgerID }],
      function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
      }
    );
  }
};

//export the orm
module.exports = orm;
