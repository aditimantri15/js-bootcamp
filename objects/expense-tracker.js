let myAccount = {
    name : 'Aditi',
    income : 0,
    expenses : 0
}

let addExpense  = function(account, expense) {
    account.expenses += expense
}

let addIncome  = function(account, income) {
    account.income += income
}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account) {
   return `Account for ${account.name} has $${account.income-account.expenses}. 
    $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 100)
addExpense(myAccount, 500)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
