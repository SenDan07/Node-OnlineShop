require("dotenv").config();
const { Sequelize } = require("sequelize");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  "node-project",
  `${DB_USER}`,
  `${DB_PASSWORD}`,
  { dialect: "mysql", host: `${DB_HOST}` }
);

module.exports = sequelize;