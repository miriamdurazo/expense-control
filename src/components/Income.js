import React, { useContext, useState } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext";

export const Income = () => {
    const { income } = useContext(ExpensesContext);
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
      <form className='budget-form' onSubmit={handleSubmitIncome}>
      <label
        for="price"
        class="block text-sm font-medium leading-6 text-gray-900"
      >
        Income: £{newIncome}
      </label>
      <div class="relative mt-2 rounded-md shadow-sm">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span class="text-gray-500 sm:text-sm">£{newIncome}</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
           onChange={(e) => setIncome(e.target.value)}
        />
      </div>
      </form>
    </div>
    )
}