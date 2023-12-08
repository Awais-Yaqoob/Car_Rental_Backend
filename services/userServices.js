const { models } = require("../models/definations");
const users = require("../models/definations/userModel/userModel");
const bcrypt = require("bcrypt");

module.exports = {
  getUsers: async () => {
    const result = await users.findAll();
    return result;
  },

  createUser: async (data) => {
    const saltRound = 10;
    data.password = bcrypt.hashSync(data.password, saltRound);
    const result = await users.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });
    return result;
  },
};
