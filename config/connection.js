var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "yiak66221blxmgb4",
  password: "gka2dr518i5i8a4b",
  database: "qot7z5rk6xate887"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;