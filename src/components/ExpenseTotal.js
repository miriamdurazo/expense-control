import React, { useContext } from 'react';
import { ExpensesContext } from '../contexts/ExpensesContext.js';

// FaMoneyBillWave
// Style
import '../styles/expenses.css'


export const ExpenseTotal = () => {
	const { expensesTotal } = useContext(ExpensesContext);
    // console.log(`Total expenses: £${expensesTotal}`);

	return (
		<div className='alert alert-primary p-4'>
			<span className="text-xl py-4 font-semibold">Total monthly expenses: £{expensesTotal}</span>
		</div>
	);
};