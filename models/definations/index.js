let sequelize = require("../../common/dbConnection");

let categories = require("./categoriesModel/categories");
let cars = require("./carProductModel/cars");
let user = require("./userModel/userModel");
const bookings = require("./carBookingDetails/carBookingDetails");

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
bookings.hasOne(cars, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "carId",
});
cars.hasOne(bookings, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "carId",
});

const models = sequelize.models;

console.log(models);

const db = {};

db.sequelize = sequelize;

module.exports = { db, models };
