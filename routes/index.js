var express = require("express");
var router = express.Router();

console.log("us,an");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
