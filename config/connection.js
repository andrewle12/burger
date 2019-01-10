// Set up MySQL connection.
var mysql = require("mysql");

var connection;
 

// Make connection.
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
  connection = mysql.createConnection({
    host: "localhost",
    user: "default",
    password: "",
    database: "burgers_db"
  });
}

// Export connection for ORM to use.
module.exports = connection;