import React, { useEffect } from 'react';
import ApexCharts from "apexcharts";
const Linechart = () => {
  useEffect(() => {
    const options = {
      series: [{
        name: 'Increase in Income',
        data: [5.3, 7.1, 6.0, 10.1, 9.0, 5.6, 3.2, 4.3, 6.4, 8.8, 9.5, 4.2],
      }],
      chart: {
        height: 350,
        type: 'line',
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
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
        align:'left',
       
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
    <div id="chart" style={{borderRadius:'8px',backgroundColor:'white',width:'50%',marginTop:'50px'}}>
      {/* Chart will be rendered here */}
    </div>
  );
};

export default Linechart;
