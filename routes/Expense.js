const express = require("express");
const router = express.Router();

const expenseController = require("../controller/Expense");

router.get("/expenses", expenseController.getExpenses);
router.post("/del-expense/:id", expenseController.delExpense);
router.post("/add-expense", expenseController.addExpense);

module.exports = router;



