import React, { useState } from "react";
// import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const ExpensesGraph = ({ expenses }) => {
  const [data, setData] = useState({});
  // function to get expenses data in the required format for Chart.js
  console.log(expenses);
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
  // const createChart = () => {
  //   const chartData = getChartData();
  //   const ctx = document.getElementById("expensesChart2").getContext("2d");
  //   new Chart(ctx, {
  //     type: "bar",
  //     data: chartData,
  //     options: {
  //       scales: {
  //         yAxes: [
  //           {
  //             ticks: {
  //               beginAtZero: true
  //             }
  //           }
  //         ]
  //       }
  //     }
  //   });
  // };

  // call createChart function when component mounts
  // React.useEffect(() => {
  //   setData(getChartData());
  //   // createChart();
  // }, []);

  // render the chart canvas
  // return (
  //   <div>
  //   <Bar data={data} />
  // </div>
  // );
};

export default ExpensesGraph;
