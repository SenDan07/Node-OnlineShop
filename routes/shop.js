const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // next() allows the response to continue to the next middleware in line
  res.send("<h1>Hello from Express!</h1>");
});

module.exports = router;
