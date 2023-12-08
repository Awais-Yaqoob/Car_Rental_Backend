var express = require("express");
var router = express.Router();
const { getUsers, createUser } = require("../controller/userController");
const auth = require("../Controller/common/authController");

/* GET users listing. */
router.get("/", auth.authenticateToken, getUsers);
router.post("/createUser", createUser);
router.post("/login", auth.login);

module.exports = router;
