import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const PracticeGraph = ({expenses}) => {
    console.log(expenses);
    
    const labels = Object.keys(expenses);
    console.log(labels);
    const dataPoints = Object.values(expenses);
    console.log(dataPoints);
    
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
}

export default PracticeGraph;