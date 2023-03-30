import React, { useState } from 'react';
// import { ExpensesContext } from '../contexts/ExpensesContext.js';
import ExpenseTable from "./ExpenseTable.js";


// Style
import '../styles/expenses.css'



const ExpenseList = () => {
	// const { expenses } = useContext(ExpensesContext);

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

      // state to hold selected month
      const [selectedMonth, setSelectedMonth] = useState(months[0]);
      // function to handle select month change
      const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
      };

	return (
		<>
      <div className="p-10">
          <h2 className="text-3xl py-4  text-blue-800 text-center font-semibold">Money spent in {selectedMonth}</h2>
          <label className="group px-6 py-3 text-left text-lg font-semibold text-blue-800 uppercase tracking-wider" htmlFor="month">Select month: </label>
          <select id="month" value={selectedMonth} onChange={handleMonthChange}> 
              {months.map((month, index) => {
              return (<option key={index} value={month}>{month}</option>);
              })}
          </select>

            <ExpenseTable />   
      </div>
		</>
	);
};

export default ExpenseList;