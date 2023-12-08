const config = require("../config");

const { sequelize, Sequelize } = require("sequelize");

var database = new Sequelize(config.db);

database
  .authenticate()
  .then(() => {
    console.log("Database Created");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = database;
