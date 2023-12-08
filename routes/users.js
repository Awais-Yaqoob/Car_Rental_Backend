var express = require("express");
var router = express.Router();
var userController = require("../controller/userController");

const authController = require("../controller/common/authController");
router.get("/", authController.authenticateToken, userController.getUsers);

router.post("/createUser", userController.createUsers);
router.post("/login", authController.login);

module.exports = router;
