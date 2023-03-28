import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem.js';
import { ExpensesContext } from '../contexts/ExpensesContext.js';
import { TiDelete } from "react-icons/ti";

// Style
import '../styles/expenses.css'


const ExpenseList = () => {
	const { expenses } = useContext(ExpensesContext);

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	// const handleChange = (event) => {
	// 	const searchResults = expenses.filter((filteredExpense) =>
	// 		filteredExpense.name.toLowerCase().includes(event.target.value)
	// 	);
	// 	setfilteredExpenses(searchResults);
	// };

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
			{/* <input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/> */}

            <div className="p-10">
                <h2 className="text-3xl py-4 font-semibold">Monthly expenses for the month of {selectedMonth}</h2>
                <label className="group px-6 py-3 text-left text-lg font-semibold text-blue-800 uppercase tracking-wider" htmlFor="month">Select month: </label>
                <select id="month" value={selectedMonth} onChange={handleMonthChange}> 
                    {months.map((month, index) => {
                    return (<option key={index} value={month}>{month}</option>);
                    })}
                </select>

                    
            </div>


			<ul className='max-w-md divide-y divide-gray-200 dark:divide-gray-700 divide-opacity-50'>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</ul>
		</>
	);
};

export default ExpenseList;