import React, { useContext } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext.js";
import DeleteExpenseItem from "./DeleteExpenseItem.js";
import ExpenseCostInput from "./ExpenseCostInput.js"
// Style
import "../styles/expenses.css";

function ExpenseTable() {
  const { expenses } = useContext(ExpensesContext);

  return (
    <div className="mt-2 flex flex-col">
      <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-800">
                <tr>
                  <th className="group px-10 py-3 text-left text-lg font-semibold text-slate-200 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-8 py-3 text-left text-lg font-semibold text-slate-200 uppercase tracking-wider">
                    Cost (£)
                  </th>
                  <th className="px-2 py-3 text-left text-lg font-semibold text-slate-200 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td className="px-10 py-4 whitespace-nowrap">
                      {expense.name}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      <input type="number" defaultValue={expense.cost} />
                    </td> */}
                    <td className="px-8 py-4 whitespace-nowrap">
                      <ExpenseCostInput id={expense.id} name={expense.name} cost={expense.cost} />
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap">
                      <DeleteExpenseItem  id={expense.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTable;
