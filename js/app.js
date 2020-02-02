class UI {
    constructor() {
      this.budgetFeedback = document.querySelector(".budget-feedback");
      this.expenseFeedback = document.querySelector(".expense-feedback");
      this.budgetForm = document.getElementById("budget-form");
      this.budgetInput = document.getElementById("budget-input");
      this.budgetAmount = document.getElementById("budget-amount");
      this.expenseAmount = document.getElementById("expense-amount");
      this.balance = document.getElementById("balance");
      this.balanceAmount = document.getElementById("balance-amount");
      this.expenseForm = document.getElementById("expense-form");
      this.expenseInput = document.getElementById("expense-input");
      this.amountInput = document.getElementById("amount-input");
      this.expenseList = document.getElementById("expense-list");
      this.itemList = [];
      this.itemID = 0;
   }
   submitBudgetForm(){
      //console.log("Active");
      const value = this.budgetInput.value;
      if (value === '' || value < 0) {
         this.budgetFeedback.classList.add('showItem');
         this.budgetFeedback.innerHTML = `El valor no puede estar vacio o ser negativo!`;
         const self = this;
         setTimeout(function () {
            self.budgetFeedback.classList.remove('showItem');
         }, 3000)
      } else {
         this.amountInput.textContent = value;
         this.budgetInput.value = '';
         this.showBalance();
      }
   }
   showBalance() {
      // console.log('Active value');
      const expense = this.totalExpense();  
      const total = parseInt(this.budgetAmount.textContent) - expense;
      this.balanceAmount.textContent = total;
   }
   totalExpense() {

   }
}
function eventListeners() {
   const budgetForm = document.getElementById('budget-form');
   const expenseForm = document.getElementById('expense-form');
   const expenseList = document.getElementById('expense-list');

   const ui = new UI();

   budgetForm.addEventListener('submit', function (event) {
      event.preventDefault();
      ui.submitBudgetForm();
   })
   expenseForm.addEventListener('submit', function (event) {
      event.preventDefault();
   })
   expenseList.addEventListener('click', function () {
      
   })
}
document.addEventListener('DOMContentLoaded', function(){
   eventListeners();
});

