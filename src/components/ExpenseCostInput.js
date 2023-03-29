import React, { useState, useContext } from 'react';
import { ExpensesContext } from '../contexts/ExpensesContext.js';
import { FaPlusCircle } from "react-icons/fa";

const ExpenseCostInput = (props) => {
	const { dispatch } = useContext(ExpensesContext);
    
    // const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const handleExpenseCostInput = (e) => {
        e.preventDefault();
        console.log(`This is the category name ${props.name}`);
        console.log(`This is the category id ${props.id}`);
		const expense = {
			id: props.id,
			name: props.name,
			cost: parseFloat(cost),
		};

		dispatch({
			type: 'UPDATE_EXPENSES',
			payload: expense,
		});
        
        // setName('');
		setCost('');
	};

	return (
        
		<form onSubmit={handleExpenseCostInput}>
            
            <span className='text-sm text-gray-500 truncate dark:text-gray-600 pr-1'>£</span>
            <input className='w-64 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            type="number"
            defaultValue={props.cost.toFixed(2)}
            onChange={(e) => setCost(e.target.value)}
            />
            <span>
                <button type='submit' className='btn btn-primary pl-3'>
					{/* Save */}
                    <FaPlusCircle size='1.15em' style={{color: 'green'}} />
				</button>
            </span>
        </form>     
        
	);
};

export default ExpenseCostInput;