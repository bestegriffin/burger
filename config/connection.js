
var mysql = require('mysql');
var connection;


if {
  connection = mysql.createConnection({
    SocketPath : 'localhost',
    user     : 'root',
    password : 'root', // Add your password
    database : 'burgers_db' // Add your database
  });
}else(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}

module.exports = connection;