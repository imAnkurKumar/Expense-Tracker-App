const Sequelize = require("sequelize");

const sequelize = new Sequelize("expense-tracker", "root", "T#9758@QLPH", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = sequelize;
