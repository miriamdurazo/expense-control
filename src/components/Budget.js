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
    <div>
      <span className="instructions">Begin by typing the numbers and press enter to continue</span>
      <form className="budget-form" onSubmit={handleSubmitBudget}>
        <label
          for="price"
          id="budget-label"class="block text-sm font-medium leading-6 text-black-900"
        >
          Budget:
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
            onChange={(e) => setBudget(e.target.value)}
          />
          <div class="absolute inset-y-0 right-0 flex items-center">
            <label for="currency" class="sr-only">
              Currency
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};
