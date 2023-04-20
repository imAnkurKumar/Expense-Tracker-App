const Expense = require("../model/Expense");

exports.getExpenses = (req, res, next) => {
  Expense.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addExpense = (req, res, next) => {
  const amount = req.body.amount;
  const description = req.body.description;
  const category = req.body.category;
  Expense.create({
    amount: amount,
    description: description,
    category: category,
  })
    .then((result) => {
      console.log("entry created");
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.delExpense = (req, res, next) => {
  const id = req.params.id;
  Expense.findByPk(id)
    .then((Expense) => {
      res.json(Expense.destroy());
    })
    .catch((err) => {
      console.log(err);
    });
};

