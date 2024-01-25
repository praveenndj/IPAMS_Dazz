import React, { useEffect } from 'react';
import "./Dashboard.css"
import ApexCharts from 'apexcharts';
import Navibar from './Navibar';

const Dashboard = () => {
  // Line Chart Data and Options
  function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    
      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
    }
  const lineChartOptions = {
    series: [{
        name: 'Increase in Income',
        data: [5.3, 7.1, 6.0, 10.1, 9.0, 5.6, 3.2, 4.3, 6.4, 8.8, 9.5, 4.2],
      }],
      chart: {
        height: 300,
        type: 'line',
        width: 450,
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

  const lineChartData = {
    // ... line chart data
  };

  // Pie Chart Data and Options
  const pieChartOptions = {
    series: [25, 15, 54, 45, 41, 17],
    chart: {
      height: 300,
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
      text: "Project Completion Department wise",
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

  const pieChartData = {
    // ... pie chart data
  };

  // Bar Chart Data and Options
  const barChartOptions = {
    series: [{
        name: 'Completed Projects',
        data: [101,98,331,297,242,111],
      }],
      chart: {
        height: 300,
        type: 'bar',
        width: 450,
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
        categories: ["Data Science", "Cyber Security", "Web-Development", "Software Development", "Testing", "Data Analytics"],
        position: 'bottom',
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
        text: 'Increase in Projects Count, 2023',
        style: {
          color: '#444',
        },
      },
  };

  const barChartData = {
    // ... bar chart data
  };
  
  const heatMapOptions={
    series: [{
        name: 'Data Science',
        data: generateData(12, {
          min: 10,
          max: 50
        })
      },
      {
        name: 'Cyber Security',
        data: generateData(12, {
          min: 10,
          max: 50
        })
      },
      {
        name: 'Web Development',
        data: generateData(12, {
          min: 10,
          max: 50
        })
      },
      {
        name: 'Software Devlopment',
        data: generateData(12, {
          min: 10,
          max: 50
        })
      },
      {
        name: 'Testing',
        data: generateData(12, {
          min: 10,
          max: 50
        })
      },
      {
        name: 'Data Analytics',
        data: generateData(12, {
          min: 10,
          max: 50
        })
      },
      ],
        chart: {
        height: 300,
        width:450,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#008FFB"],
      title: {
        text: 'Employees on Leave Count in Months of 2023'
      },
  };
  useEffect(() => {
    // Line Chart
    const lineChart = new ApexCharts(document.querySelector("#lineChart"), lineChartOptions);
    lineChart.render();

    // Pie Chart
    const pieChart = new ApexCharts(document.querySelector("#pieChart"), pieChartOptions);
    pieChart.render();

    // Bar Chart
    const barChart = new ApexCharts(document.querySelector("#barChart"), barChartOptions);
    barChart.render();
    
    const heatMap = new ApexCharts(document.querySelector("#heatMap"), heatMapOptions);
    heatMap.render();
    // Cleanup function to destroy the charts on component unmount
    return () => {
      lineChart.destroy();
      pieChart.destroy();
      barChart.destroy();
      heatMap.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
    <Navibar/>
    <div className='dashboard'>
       <h2 style={{marginLeft:'70px',color: 'white'}}>DashBoard</h2>
      <div className='dashboard-row'>
      <div id="lineChart" style={{ borderRadius: '8px', backgroundColor: 'white', boxShadow: '30px',paddingBottom:'30px' }}>
        {/* Line Chart will be rendered here */}
      </div>

      <div id="pieChart" style={{ borderRadius: '8px', backgroundColor: 'white', boxShadow: '30px',paddingBottom:'30px' }}>
        {/* Pie Chart will be rendered here */}
      </div>
      <div id="heatMap" style={{ borderRadius: '8px', backgroundColor: 'white', boxShadow: '30px',paddingBottom:'30px' }}>
        {/* Bar Chart will be rendered here */}
      </div>
      </div>
      <div className='dashboard-row'>
      <div id="pieChart" style={{  borderRadius: '8px', backgroundColor: 'white', boxShadow: '30px',paddingBottom:'30px' }}>
        {/* Pie Chart will be rendered here */}
      </div>
      <div id="barChart" style={{  borderRadius: '8px', backgroundColor: 'white', boxShadow: '30px',paddingBottom:'30px' }}>
        {/* Bar Chart will be rendered here */}
      </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;