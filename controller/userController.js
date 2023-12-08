const userService = require("../services/userServices");
const bcrypt = require("bcrypt");
module.exports = {
  getUsers: async (req, res) => {
    const data = await userService.getUsers();
    res.send(data);
  },
  createUsers: async (req, res) => {
    const saltROund = 10;
    req.body.password = bcrypt.hashSync(req.body.password, saltROund);
    const data = await userService.createUsers(req.body);
    res.send(data);
  },
  createUsersHelper: async (data) => {
    const userData = await userService.createUsers(data);
    return userData;
  },
};
