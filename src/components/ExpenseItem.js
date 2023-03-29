import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { ExpensesContext } from '../contexts/ExpensesContext.js';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(ExpensesContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
        
		<li className='class="pb-3 sm:pb-4'>
            <div className="flex items-center space-x-4">
			
			    <div className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {props.name}
                </div>
				<span class='text-sm text-gray-500 truncate dark:text-gray-600'>£{props.cost}</span>
				<TiDelete size='1.5em' onClick={handleDeleteExpense} />
			</div>
            
		</li>
        
	);
};

export default ExpenseItem;