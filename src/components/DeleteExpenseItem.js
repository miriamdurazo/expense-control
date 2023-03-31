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
        
		<FaMinusCircle size='1.15em' style={{color: 'red'}} onClick={handleDeleteExpense}/>
        
	);
};

export default DeleteExpenseItem;