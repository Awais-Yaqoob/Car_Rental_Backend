const userServices = require("../Services/userServices");

module.exports = {
  getUsers: async (req, res) => {
    const data = await userServices.getUsers();
    res.send(data);
  },
  createUser: async (req, res) => {
    const result = await userServices.createUser(req.body);
    res.json(result);
  },
};
