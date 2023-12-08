const { DataTypes } = require("sequelize");

let sequelize = require("../../../common/dbConnection");

const bookings = sequelize.define(
  "bookings",
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
      allowNull: false,
      type: DataTypes.STRING,
    },
    phoneNumber: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    age: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    zipCode: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "bookings",
  }
);

module.exports = bookings;
