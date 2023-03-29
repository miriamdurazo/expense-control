import React, { useContext } from 'react';
import { ExpensesContext } from '../contexts/ExpensesContext.js';
import { FaMoneyBillWave } from "react-icons/fa";

// FaMoneyBillWave
// Style
import '../styles/expenses.css'


const ExpenseTotal = () => {
	const { expenses } = useContext(ExpensesContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div className='alert alert-primary p-4'>
			<span className="text-xl py-4 font-semibold">Total monthly expenses: £{total}</span>
		</div>
	);
};

export default ExpenseTotal;