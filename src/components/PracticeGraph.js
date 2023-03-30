import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { ExpensesContext } from "../contexts/ExpensesContext.js";


export const PracticeGraph = () => {
  const { expenses } = useContext(ExpensesContext);
  
  console.log(`This is the expenses array? ${JSON.stringify(expenses)}`);
  
  // Get the expenses category labels
  const labels = expenses.map(expense => expense.name);
  console.log(`The labels are ${labels}`);
  
  // Get the expenses costs
  const dataPoints = expenses.map(expense => expense.cost);
  console.log(`The data points are ${dataPoints}`);
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Monthly Expenses by Category",
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)"
        ],
        data: dataPoints,
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

