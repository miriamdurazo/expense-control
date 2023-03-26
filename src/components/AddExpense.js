import React from 'react';

export const AddExpense = () => {
  return (
    <div>
        <h2>Add New Expense Category</h2>
        <form>
            <label>
                Category name:
                <div>
                    <input type='text' />
                </div>
            </label>
            <label>
                Amount:
                <div>
                    <input type='number' />
                </div>
            </label>
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddExpense;