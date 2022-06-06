const Sequelize = require("sequelize");

const sequelizeDb = require("../util/database");

const Product = sequelizeDb.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isEnable: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Product;
