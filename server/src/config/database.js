const mysql = require("mysql2"); //import mysql

// Create the connection pool. The pool-specific settings are the defaults
const db_pool = mysql.createPool({
  host: sql12.freemysqlhosting.net,
  user: sql12610282,
  database: sql12610282,
  password: Rb8NAjHYhQ,
});

module.exports = db_pool.promise();
