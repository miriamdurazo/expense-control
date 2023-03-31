import React, { useContext, useState } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

export const Budget = () => {
  //const { budget } = useContext(ExpensesContext);
  const { dispatch } = useContext(ExpensesContext);
  const [newBudget, setBudget] = useState("");

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
    <form className='flex flex-col' onSubmit={handleSubmitBudget}>
      <h1 className='flex w-[22rem] py-8 mb-10 text-4xl justify-center bg-[#efd304] rounded-full text-white'>Your budget</h1>
      <input className="block bg-white w-80 ml-4 border border-slate-300 rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-md" type="number" onChange={(e) => setBudget(e.target.value)}></input>
    </form>
  )
}