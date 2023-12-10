const { DataTypes, STRING } = require("sequelize");

let sequelize = require("../../../common/dbConnection");

const cars = sequelize.define(
  "cars",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    Description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    rentperday: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "cars",
  }
);

module.exports = cars;
