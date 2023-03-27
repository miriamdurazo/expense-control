import React, { useState } from "react";
// import ExpensesGraph from "./ExpensesGraph.js";
import PracticeGraph from "./PracticeGraph.js";
import AddExpense from './AddExpense.js';

// Style
import '../styles/expenses.css'

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
    <div className="p-10">
      <h2 className="text-3xl py-4 font-semibold">Monthly expenses for the month of {selectedMonth}</h2>
      <label htmlFor="month">Select month: </label>
      <select id="month" value={selectedMonth} onChange={handleMonthChange}> 
        {months.map((month, index) => {
          return (<option key={index} value={month}>{month}</option>);
        })}

      </select>
      <div className="mt-2 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-800">
                  <tr>
                    <th className="group px-6 py-3 text-left text-lg font-semibold text-slate-200 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-lg font-semibold text-slate-200 uppercase tracking-wider">
                      Cost (£)
                    </th>
                    <th className="px-2 py-3 text-left text-lg font-semibold text-slate-200 uppercase tracking-wider">
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Object.entries(expenses).map(([category, expense]) => (
                    <tr key={category}>
                      <td className="px-6 py-4 whitespace-nowrap">{category}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="number"
                          value={expense}
                          onChange={(e) => updateExpense(category, parseFloat(e.target.value))}
                        />
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap">
                        <button>x</button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Total</td>
                    <td className="px-6 py-4 whitespace-nowrap">{totalExpenses}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <AddExpense />
      <div >
        <PracticeGraph expenses={expenses}/>
      </div>
      
    </div>
  );
};

export default ExpensesCategories;
