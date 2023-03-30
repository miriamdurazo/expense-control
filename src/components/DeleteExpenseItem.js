import React, { useContext } from 'react';
import { FaMinusCircle } from "react-icons/fa";
import { ExpensesContext } from '../contexts/ExpensesContext.js';

const DeleteExpenseItem = (props) => {
	const { dispatch } = useContext(ExpensesContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
        
		<button onClick={handleDeleteExpense}>
        	<FaMinusCircle size='1.15em' style={{color: 'red'}} />
		</button>
		
        
	);
};

export default DeleteExpenseItem;