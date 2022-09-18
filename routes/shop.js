const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  // next() allows the response to continue to the next middleware in line
  const products = adminData.products;
  res.render("shop", { prods: products, pageTitle: "Shop", path: '/' });
});

module.exports = router;
