import React, { createContext, useReducer, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from 'uuid';

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
        case 'UPDATE_EXPENSES':
            // return {
            //   ...state,
            //   expenses: [...state.expenses, action.payload],
            // };
            const updatedExpenses = state.expenses.map((expense) => {
              if (expense.id === action.payload.id) {
                  return {
                      ...expense,
                      ...action.payload,
                  };
              } else {
                  return expense;
              }
            });
            return {
              ...state,
              expenses: updatedExpenses,
            };
            break;
            
        case 'ADD_BUDGET':
          return {
            ...state, 
            budget: action.payload,
          }
          break;
          
        case 'ADD_INCOME':
          return {
            ...state,
            budget: action.payload,
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
        {id: uuidv4(), name: 'Miscellaneous', cost: 0.00},
        {id: uuidv4(), name: 'Transport', cost: 0.00},
        {id: uuidv4(), name: 'Groceries', cost: 0.00},
        {id: uuidv4(), name: 'Eating out', cost: 0.00},
        {id: uuidv4(), name: 'Shopping', cost: 0.00},
        {id: uuidv4(), name: 'Housing', cost: 0.00},
        {id: uuidv4(), name: 'Utility bills', cost: 0.00},
        {id: uuidv4(), name: 'Broadband', cost: 0.00},
        {id: uuidv4(), name: 'Entertainment', cost: 0.00},
    ],
}

export const ExpensesContext = createContext();

// export function useExpenses() {
//   return useContext(ExpensesContext);
// }


// maybe change children to props
export const ExpensesProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  // state to hold expenses
//   const [expenses, setExpenses] = useState(initialExpenses);
  const [expensesLocal, setExpensesLocal] = useLocalStorage("expenses", [state.expenses]);

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
