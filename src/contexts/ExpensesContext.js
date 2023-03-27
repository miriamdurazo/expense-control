import React, { createContext, useContext, useState } from "react";
// import { v4 as uuid } from 'uuid';

const ExpensesContext = createContext();

export function useExpenses() {
  return useContext(ExpensesContext);
}

export const ExpensesProvider = ({ children }) => {
  // initial expenses state
  const initialExpenses = {
    Miscellaneous: 0.0,
    Transport: 0.0,
    Groceries: 0.0,
    EatingOut: 0.0,
    Shopping: 0.0,
    Housing: 0.0,
    UtilityBills: 0.0,
    Broadband: 0.0,
    Entertainment: 0.0,
  };
  // state to hold expenses
  const [expenses, setExpenses] = useState(initialExpenses);

//   function addExpenseCategory({ expenseCategoryName, amount }) {
//     setExpenses((prevExpenses) => {
//       return [...prevExpenses, { id: uuidV4(), expenseCategoryName, amount }];
//     });
//   }

  function deleteExpenseCategory({ id }) {
    setExpenses(prevExpenses => {
        return prevExpenses.filter(expense => expense.id !== id)
    })
  }
  return (
    <ExpensesContext.Provider
      value={{
        // budget,
        expenses,
        // addExpenseCategory,
        // deleteExpenseCategory,
        // addBudget,
        // deleteBudget,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};
