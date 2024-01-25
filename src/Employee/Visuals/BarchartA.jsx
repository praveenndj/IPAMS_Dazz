import React, { useEffect } from 'react';
import ApexCharts from "apexcharts";
const BarchartA = () => {
  useEffect(() => {
    const options = {
      series: [{
        name: 'Completed Projects',
        data: [101,98,331,297,242,111],
      }],
      chart: {
        height: 350,
        type: 'bar',
        width: 550,
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          fill: {
            colors: ['rgb(2,1,43)']
          },
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["rgb(2,1,43)"],
        },
      },
      xaxis: {
        categories: ["Data Science Team", "Cyber Security Team", "Web-Development Team", "Software Development Team", "Testing Team", "Data Analytics Team"],
        position: 'top',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      title: {
        text: 'Increase in Project Income, 2023',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444',
        },
      },
    };

    const barchart = new ApexCharts(document.querySelector("#chart"), options);
    barchart.render();

    // Cleanup function to destroy the chart on component unmount
    return () => {
      barchart.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div id="barchart">
      {/* Chart will be rendered here */}
    </div>
  );
};

export default BarchartA;
