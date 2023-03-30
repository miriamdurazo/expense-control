import React, { createContext, useReducer } from "react";
// useState
// import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from 'uuid';

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state, 
                expenses: [...state.expenses, action.payload],
                expensesTotal: state.expensesTotal + action.payload.cost,
            }
            
        case 'DELETE_EXPENSE':{
          const deletedExpense = state.expenses.find((expense) => expense.id === action.payload);
            return {
                ...state, 
                expenses: state.expenses.filter((expense) => expense.id !== action.payload),
                expensesTotal: state.expensesTotal - deletedExpense.cost,
            };
          }
            
        case 'UPDATE_EXPENSES':
            {
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
              expensesTotal: updatedExpenses.reduce((acc, expense) => acc + expense.cost, 0),
            };
          }
            
            
        case 'ADD_BUDGET':
          return {
            ...state, 
            budget: action.payload,
          }

          
        case 'ADD_INCOME':
          return {
            ...state,
            budget: action.payload,
          }

        default:
            return state;
            
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
    expensesTotal: 0,
}

export const ExpensesContext = createContext();

export const ExpensesProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

  // const [expensesLocal, setExpensesLocal] = useLocalStorage("expenses", [state.expenses]);

  return (
    <ExpensesContext.Provider
      value={{
        budget: state.budget,
        income: state.income,
        expenses: state.expenses,
        expensesTotal: state.expensesTotal,
        dispatch,
        
      }}
    >
      {props.children}
    </ExpensesContext.Provider>
  );
};
