let budgetValue = 0;
let totalExpensesValue = 0;

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12]
];

for (let expense of expenseEntries) {
  
  totalExpensesValue += expense[1];
  
  console.log("Valor total de los gastos: " + totalExpensesValue);
}

function calculateAverageExpense() {
  
  if (expenseEntries.length === 0) {
    return 0;
  }

 
  let average = totalExpensesValue / expenseEntries.length;

  
  return average;
}

function calculateBalance() {

  let balance = budgetValue - totalExpensesValue;
  
  return balance;
}

let balanceColor = "green";


function updateBalanceColor() {
  
  let currentBalance = calculateBalance();

  if (currentBalance < 0) {

    balanceColor = "red";
  } else if (currentBalance < (budgetValue * 0.25)) {

    balanceColor = "orange";
  } else {
   
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(categoryName) {

  let categoryTotal = 0;

  for (let expense of expenseEntries) {

    if (expense[0] === categoryName) {

      categoryTotal += expense[1];
    }
  }

  return categoryTotal;
}

function calculateLargestCategory() {
  
  let uniqueCategories = ["groceries", "restaurants", "transport", "home", "subscriptions"];
  
  let categoriesData = [];
  
  for (let category of uniqueCategories) {
  
    let totalForCategory = calculateCategoryExpenses(category);

    categoriesData.push([category, totalForCategory]);
  }

  let largestCategoryName = categoriesData[0][0];
  let maxExpenseValue = categoriesData[0][1];

  for (let data of categoriesData) {
    let currentCategoryName = data[0];
    let currentCategoryTotal = data[1];

    if (currentCategoryTotal > maxExpenseValue) {
     
      maxExpenseValue = currentCategoryTotal;
      largestCategoryName = currentCategoryName;
    }
  }

  return largestCategoryName;
}

function addExpenseEntry(newExpense) {
  expenseEntries.push(newExpense);
  
  totalExpensesValue += newExpense[1];
}