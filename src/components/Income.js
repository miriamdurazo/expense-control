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
        <div>
          <span className="instructions">Begin by typing the numbers and press enter to continue</span>
      <form className='income-form' onSubmit={handleSubmitIncome}>
      <label
        for="price"
        id="income-label"class="block text-sm font-large leading-6 text-black-900"
      >
        Income:
      </label>
      <div class="relative mt-2 rounded-md shadow-sm">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span class="text-black-500 sm:text-sm">£</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          class="block w-full rounded-md border-1 py-1.5 ps-8  pr-20 text-black-900 ring-1 ring-inset ring-indigo-600 focus:ring-2 focus:ring-inset focus:ring-indigo-800 sm:text-lg sm:leading-6"
           onChange={(e) => setIncome(e.target.value)}
        />
      </div>
      </form>
    </div>
    )
}