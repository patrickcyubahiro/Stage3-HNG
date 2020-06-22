Expenses.find({}).populate("mdas").populate("companies").then( function (expense){
    res.json({status: Success,
          message: Data retrieved,
           data: {expense.expenseDesc,expense.Amount,expense.mda.name,expense.companies.name}});
})
