const sequelize = require("../../../common/dbConnection");
const { DataTypes } = require("sequelize");

const tokens = sequelize.define("token", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = tokens;
