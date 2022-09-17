const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // next() allows the response to continue to the next middleware in line
  res.render("shop");
});

module.exports = router;
