document
  .getElementById("expenseForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const expenseName = document.getElementById("expenseName").value;
    const expenseAmount = parseFloat(
      document.getElementById("expenseAmount").value
    );

    if (expenseName && expenseAmount) {
      addExpense(expenseName, expenseAmount);
      updateTotalExpenses(expenseAmount);
      document.getElementById("expenseForm").reset();
    }
  });

function addExpense(name, amount) {
  const expensesList = document.getElementById("expensesList");

  const li = document.createElement("li");
  li.innerHTML = `  
        ${name}: $${amount.toFixed(2)}  
        <button onclick="removeExpense(this, ${amount})">Remove</button>  
    `;

  expensesList.appendChild(li);
}

function removeExpense(button, amount) {
  const li = button.parentElement;
  li.remove();
  updateTotalExpenses(-amount);
}

function updateTotalExpenses(amount) {
  const totalExpensesElement = document.getElementById("totalExpenses");
  let totalExpenses = parseFloat(totalExpensesElement.textContent);
  totalExpenses += amount;
  totalExpensesElement.textContent = totalExpenses.toFixed(2);
}
