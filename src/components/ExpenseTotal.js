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
		<div class="max-w-sm rounded-lg overflow-hidden shadow-lg">
			<div className='bg-indigo-800 text-center py-4 lg:px-4'>
				<div className='p-2 bg-indigo-700 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex'>
				<span class="flex rounded-full bg-indigo-100 uppercase px-2 py-1 mr-3">
					<FaMoneyBillWave size='2.5em'style={{color: 'green'}} />
				</span>
				<span className="text-xl py-4 px-4 font-semibold">Total monthly expenses:</span>
				</div>
				<p className='mr-2 text-center flex-auto text-indigo-100 font-semibold text-3xl mb-2 pt-6 px-4'> £{expensesTotal}</p>
			</div>
		</div>
	);
};

export default ExpenseTotal;