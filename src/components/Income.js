import React, { useContext, useState } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

export const Income = () => {

    const {dispatch} = useContext(ExpensesContext);
    const [newIncome, setIncome] = useState ('');

    function handleSubmitIncome(e) {
        e.preventDefault();
        const income = parseFloat (newIncome);
        dispatch({
            type: 'ADD_INCOME',
            payload: income,
        });
        alert(`The new income is £ ${newIncome}`);
        setIncome('');
    };

    return (
        <div className='income-container'>
            <span>Income: £{newIncome}</span>
        </div>
    )
}