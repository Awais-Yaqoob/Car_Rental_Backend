let sequelize = require("../../common/dbConnection");

let categories = require("./categoriesModel/categories");
let cars = require("./carProductModel/cars");
let user = require("./userModel/userModel");

categories.hasMany(cars, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "categoryId",
});
cars.belongsTo(categories, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "categoryId",
});

const models = sequelize.models;

console.log(models);

const db = {};

db.sequelize = sequelize;

module.exports = { db, models };
