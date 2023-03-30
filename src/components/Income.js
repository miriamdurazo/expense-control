import React, { useContext } from "react";
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
        alert(`The new income is £ ${income}`);
        setIncome('');
    };

    return (
        <div className='income-container'>
            <span>Income: £{income}</span>
        </div>
    )
}