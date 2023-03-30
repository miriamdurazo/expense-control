import React, { useContext } from 'react';
import { ExpensesContext } from '../contexts/ExpensesContext.js';
import { FaMoneyBillWave } from "react-icons/fa";

// FaMoneyBillWave
// Style
import '../styles/expenses.css'


const ExpenseTotal = () => {
	const { expensesTotal } = useContext(ExpensesContext);
    // console.log(`Total expenses: £${expensesTotal}`);

	return (
		<div className='alert alert-primary p-4'>
			<span className="text-xl py-4 font-semibold">Total monthly expenses: £{expensesTotal}</span>
		</div>
	);
};

export default ExpenseTotal;