const jwt = require("jsonwebtoken");
const config = require("../../config");
const { models } = require("../../models/definations");
const bcrypt = require("bcrypt");

let tokens = [];

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
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      let user = await models.user.findOne({
        where: {
          email: email,
        },
      });
      console.log(user);
      user = user?.dataValues;
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateAccessToken(user);
        tokens.push(token);
        res.json({ token: token });
      } else {
        res.status(404).send("user does not exists");
      }
    } catch (e) {
      console.log(e);
      res.status(400).send(e.message);
    }
  },
};
