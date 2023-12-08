const { DataTypes } = require("sequelize");

let sequelize = require("../../../common/dbConnection");

const categories = sequelize.define(
  "categories",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    category_name: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    category_image: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "categories",
  }
);

module.exports = categories;
