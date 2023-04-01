const mysql = require("mysql2"); //import mysql

// Create the connection pool. The pool-specific settings are the defaults
const db_pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = db_pool.promise();
