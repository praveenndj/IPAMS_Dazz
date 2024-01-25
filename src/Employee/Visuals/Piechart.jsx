import React, { useEffect } from 'react';
import ApexCharts from "apexcharts";

const PieChart = () => {
  useEffect(() => {
    const options = {
      series: [25, 15, 54, 45, 41, 17],
      chart: {
        height: 250,
        type: 'pie',
        width: 450,
      },
      labels: ["Data Science", "Cyber Security", "Web-Development", "Software Development", "Testing", "Data Analytics"],
      theme: {
        monochrome: {
          enabled: true,
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -5,
          },
        },
      },
      title: {
        text: "Monochrome Pie",
      },
      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          return [name, val.toFixed(1) + '%'];
        },
      },
      legend: {
        show: false,
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Cleanup function to destroy the chart on component unmount
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
    <div id="chart" style={{borderRadius:'8px',backgroundColor:'white',width:'50%',boxShadow:'30px'}}>
      {/* Chart will be rendered here */}
    </div>
    <div id="barchart">
    {/* Chart will be rendered here */}
  </div>
  </div>
  );
};

export default PieChart;
