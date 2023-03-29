import React, { useContext } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

export const Income = () => {
    const { income } = useContext(ExpensesContext);
    return (
        <div className='income-container'>
            <span>Income: £{income}</span>
        </div>
    )
}