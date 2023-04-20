const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./utils/database");
const cors = require("cors");

const expenseRoutes = require("./routes/Expense");
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(expenseRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
