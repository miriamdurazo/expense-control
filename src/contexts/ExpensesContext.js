import React, { createContext, useReducer, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidV4 } from 'uuid';

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state, 
                expenses: [...state.expenses, action.payload],
            }
            break;
        case 'DELETE_EXPENSE':
            return {
                ...state, 
                expenses: state.expenses.filter((expense) => expense.id !== action.payload),
            }
            break;
        default:
            return state;
            break;
    }
}

// initial state
const initialState = {
    budget: 2000,
    income: 1000,
    expenses: [
        {id: 12, name: 'Miscellaneous', cost: 0.00},
        {id: 13, name: 'Transport', cost: 0.00},
        {id: 14, name: 'Groceries', cost: 0.00},
        {id: 15, name: 'Eating Out', cost: 0.00},
        {id: 16, name: 'Shopping', cost: 0.00},
        {id: 17, name: 'Housing', cost: 0.00},
        {id: 18, name: 'Utility Bills', cost: 0.00},
        {id: 19, name: 'Broadband', cost: 0.00},
        {id: 20, name: 'Entertainment', cost: 0.00},
    ],
}

export const ExpensesContext = createContext();

export function useExpenses() {
  return useContext(ExpensesContext);
}


// maybe change children to props
export const ExpensesProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  // state to hold expenses
//   const [expenses, setExpenses] = useState(initialExpenses);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  return (
    <ExpensesContext.Provider
      value={{
        budget: state.budget,
        income: state.income,
        expenses: state.expenses,
        dispatch,
        
      }}
    >
      {props.children}
    </ExpensesContext.Provider>
  );
};
