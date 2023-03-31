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
    alert(`The new income is £ ${income}`);
    setIncome('');
  };

  return (
    <form className='flex flex-col' onSubmit={handleSubmitIncome}>
      <h1 className='flex w-[22rem] py-8 mb-10 text-4xl justify-center bg-[#1aae9f] rounded-full text-white'>Your income</h1>
      <input className="block bg-white w-80 ml-4 border border-slate-300 rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-md" type="number" onChange={(e) => setIncome(e.target.value)}></input>
    </form>
  )
}