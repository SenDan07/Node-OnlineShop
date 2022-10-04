const dotenv = require("dotenv");
const mysql = require("mysql2");
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// dotenv.config();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-project",
  password: "Banshee773",
});

module.exports = pool.promise();
