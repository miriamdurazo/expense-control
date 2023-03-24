import React from "react";
import Chart from "chart.js/auto";

const ExpensesGraph = ({ expenses }) => {
  // function to get expenses data in the required format for Chart.js
  const getChartData = () => {
    const categories = Object.keys(expenses);
    const data = Object.values(expenses);
    return {
      labels: categories,
      datasets: [
        {
          label: "Monthly Expenses by Category",
          data: data,
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
          borderWidth: 1
        }
      ]
    };
  };

  // function to create the Chart.js chart
  const createChart = () => {
    const chartData = getChartData();
    const ctx = document.getElementById("expensesChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  };

  // call createChart function when component mounts
  React.useEffect(() => {
    createChart();
  }, []);

  // render the chart canvas
  return (
    <div>
      <h2>Expenses by Category</h2>
      <canvas id="expensesChart"></canvas>
    </div>
  );
};

export default ExpensesGraph;
