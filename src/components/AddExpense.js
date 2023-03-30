import React, { useState, useContext } from 'react';
import { ExpensesContext } from '../contexts/ExpensesContext';
import { v4 as uuidV4 } from 'uuid';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 

// Style
import '../styles/expenses.css'

// Form to add a new expense category
export const AddExpense = () => {
  const { dispatch } = useContext(ExpensesContext);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('0');
  console.log(Chart.register(CategoryScale));
  
  function handleSubmitExpense(e) {
    e.preventDefault();
    const expense = {
        id: uuidV4(),
        name: category,
        cost: parseFloat(amount),
    };
    dispatch({
        type: 'ADD_EXPENSE',
        payload: expense, 
    });
    alert(`The category of ${category} with an amount of £${amount} has been added`);
    setCategory('');
    setAmount('0');
  };  


  return (
    <div class="flex justify-center">
        <div className="p-8 text-center">
            <div className='bg-blue-800 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex'>
                <h2 className="text-xl py-4 px-6 font-semibold ">Add new expense category</h2>
            </div>
            
            <form className='pt-2 content-center block max-w-sm' onSubmit={handleSubmitExpense}>
                <label className='mb-4 text-center'>
                    Category name:
                    <div className='p-2'>
                        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-md" placeholder="New category..." type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                    </div>
                </label>
                <label>
                    Amount (£):
                    <div className='p-2'>
                        <input className= "placeholder:italic placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-md py-2 pl-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-md" placeholder="0.00" type='number' onChange={(e) => setAmount(e.target.value)} />
                    </div>
                </label>
                <div className='py-2 pl-2'>
                    <button className='w-24 py-2 bg-blue-800 rounded-full text-slate-200 font-semibold'>Add</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default AddExpense;