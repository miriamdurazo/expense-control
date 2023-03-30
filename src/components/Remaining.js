import React, { useContext } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

export const Remaining = () => {
    const { income } = useContext(ExpensesContext);
    const { expensesTotal } = useContext(ExpensesContext);


    return (
        <div className='remaining-container'>
            <span>Remaining: £{income - expensesTotal}</span>
        </div>
    )
}