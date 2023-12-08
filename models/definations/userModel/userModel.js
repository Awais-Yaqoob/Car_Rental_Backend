const sequelize = require("../../../common/dbConnection");
const { DataTypes } = require("sequelize");

const users = sequelize.define(
  "user",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  { timestamps: true, paranoid: true, sequelize, modelName: "user" }
);
module.exports = users;
