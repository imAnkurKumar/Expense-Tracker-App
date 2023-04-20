const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Expense = sequelize.define("Expense", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: Sequelize.STRING,
  description: Sequelize.STRING,
  category : Sequelize.STRING
});
module.exports = Expense;