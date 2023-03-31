import React, { useContext, useState } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

export const IncomeExpensesBudget = () => {
    const {dispatch} = useContext(ExpensesContext);
    const [newIncome, setIncome] = useState ('');
    const [newBudget, setBudget] = useState("");

    function handleSubmitIncome(e) {
        e.preventDefault();
         const income = parseFloat(newIncome);
        dispatch({
            type: 'ADD_INCOME',
            payload: income,
        });
        alert(`The new income is £ ${income}`);
        setIncome('');
    };

    function handleSubmitBudget(e) {
        e.preventDefault();
        const budget = parseFloat(newBudget);
        dispatch({
          type: "ADD_BUDGET",
          payload: budget,
        });
        alert(`The new budget is £ ${budget}`);
        setBudget("");
      }

  return (
      <div>
      <hr />
        <div className='w-full h-[500px]'>
            <h1 className='my-24 text-4xl leading-10 mx-[300px] text-center'>To help you be on track of your expenses, please insert the amounts below and press Enter to continue.</h1>
            <div className='flex flex-row justify-around content-center items-center'>
            <form className='flex flex-col' onSubmit={handleSubmitIncome}>
                <h1 className='flex w-[22rem] py-8 mb-10 text-4xl justify-center bg-[#1aae9f] rounded-full text-white'>Your income</h1>
                <input className="block bg-white w-80 ml-4 border border-slate-300 rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-md" type="number" onChange={(e) => setIncome(e.target.value)}></input>
            </form>
            <form className='flex flex-col' onSubmit={handleSubmitBudget}>
            <h1 className='flex w-[22rem] py-8 mb-10 text-4xl justify-center bg-[#efd304] rounded-full text-white'>Your budget</h1>
            <input className="block bg-white w-80 ml-4 border border-slate-300 rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-md" type="number" onChange={(e) => setBudget(e.target.value)}></input>
            </form>
            </div></div>
      <hr />
      </div>
    );
}