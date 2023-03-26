import React, { useState } from "react";
// import ExpensesGraph from "./ExpensesGraph.js";
import PracticeGraph from "./PracticeGraph.js";
import AddExpense from './AddExpense.js';

const ExpensesCategories = () => {
   
  // initial expenses state
  const initialExpenses = {
    Miscellaneous: 0.00,
    Transport: 0.00,
    Groceries: 0.00,
    EatingOut: 0.00,
    Shopping: 0.00,
    Housing: 0.00,
    UtilityBills: 0.00,
    Broadband: 0.00,
    Entertainment: 0.00
  };

  // months array
  const months = [
    'January', 
    'February',
    'March', 
    'April', 
    'May',
    'June',
    'July',
    'August', 
    'September',
    'October', 
    'November',
    'December'
  ];
  
  // state to hold expenses and selected month
  const [expenses, setExpenses] = useState(initialExpenses);
  const [selectedMonth, setSelectedMonth] = useState(months[0]);

  // function to update expense for a category
  const updateExpense = (category, expense) => {
    setExpenses({ ...expenses, [category]: expense });
  };

  // function to handle select month change
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  // function to calculate total expenses
  const totalExpenses = Object.values(expenses).reduce(
    (total, expense) => parseFloat(total) + parseFloat(expense)
  );

  // render function
  return (
    <div>
      <h2>Monthly Expenses for {selectedMonth}</h2>
      <label htmlFor="month">Select month:</label>
      <select id="month" value={selectedMonth} onChange={handleMonthChange}>
        {months.map((month, index) => {
          return (<option key={index} value={month}>{month}</option>);
        })}

      </select>
      
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Expense</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(expenses).map(([category, expense]) => (
            <tr key={category}>
              <td>{category}</td>
              <td>
                <input
                  type="number"
                  value={expense}
                  onChange={(e) => updateExpense(category, parseFloat(e.target.value))}
                />
              </td>
              <td>
                <button>x</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{totalExpenses}</td>
          </tr>
        </tbody>
      </table>
      
      <AddExpense />
      <PracticeGraph expenses={expenses}/>
    </div>
  );
};

export default ExpensesCategories;
