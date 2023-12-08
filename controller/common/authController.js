const jwt = require("jsonwebtoken");
const { models } = require("../../models/definations");
const bcrypt = require("bcrypt");
const tokens = [];
const config = require("../../config");
const { use } = require("../../app");

function generateAccessToken(user) {
  return jwt.sign(user, config.jwt);
}

module.exports = {
  authenticateToken: async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    console.log(authHeader);

    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res.sendStatus(401);
    }
    jwt.verify(token, config.jwt, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      let user = await models.user.findOne({
        where: {
          email: email,
        },
      });
      user = user?.dataValues;
      console.log("actual user", user);

      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateAccessToken(user);
        tokens.push(token);
        res.json({ token: token });
      } else {
        res.status(404).send("User does not Exists");
      }
    } catch (e) {
      console.log(e);
      res.status(400).send(e.message);
    }
  },
};
