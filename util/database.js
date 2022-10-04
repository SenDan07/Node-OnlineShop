require('dotenv').config()
const mysql = require("mysql2");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const pool = mysql.createPool({
  host: `${DB_HOST}`,
  user: `${DB_USER}`,
  database: "node-project",
  password: `${DB_PASSWORD}`
})

module.exports = pool.promise();
