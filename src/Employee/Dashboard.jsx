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

  // Bar Chart Data and Options
  const barChartOptions = {
    series: [{
        name: 'Completed Projects',
        data: [30,48,51,47,42,31],
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
        categories: ["DS", "CY", "Web Dev", "Software Dev", "Testing", "Data Analytics"],
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
        text: 'Increase in Projects Count',
        style: {
          color: '#444',
        },
      },
  };

  const treeMapOptions = {
    series: [
        {
          data: [
            {
              x: 'New Delhi',
              y: 218
            },
            {
              x: 'Kolkata',
              y: 149
            },
            {
              x: 'Mumbai',
              y: 184
            },
            {
              x: 'Ahmedabad',
              y: 55
            },
            {
              x: 'Bangaluru',
              y: 84
            },
            {
              x: 'Pune',
              y: 31
            },
            {
              x: 'Chennai',
              y: 70
            },
            {
              x: 'Jaipur',
              y: 30
            },
            {
              x: 'Surat',
              y: 44
            },
            {
              x: 'Hyderabad',
              y: 68
            },
            {
              x: 'Lucknow',
              y: 28
            },
            {
              x: 'Indore',
              y: 19
            },
            {
              x: 'Kanpur',
              y: 29
            }
          ]
        }
      ],
        legend: {
        show: false
      },
      chart: {
        height: 300,
        width:450,
        type: 'treemap'
      },
      title: {
        text: 'Clients Across India'
      }
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
        text: 'Employees on Leave Count in last 12 Months'
      },
  };
  const gaugeChartOptions = {
    series: [97],
          chart: {
            height: 550,
            width:450,
          type: 'radialBar',
          
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: '97%',
              margin: 5, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: '#999',
                opacity: 1,
                blur: 2
              }
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -2,
                fontSize: '22px'
              }
            }
          }
        },
        grid: {
          padding: {
            top: -10
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
          },
        },
        labels: ['Working Hours Percentage'],
        title: {
            text: 'Your Working Hours Percentage'
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

    const treeMap = new ApexCharts(document.querySelector("#treeMap"), treeMapOptions);
    treeMap.render();

    const gaugeChart = new ApexCharts(document.querySelector("#gaugeChart"), gaugeChartOptions);
    gaugeChart.render();
    // Cleanup function to destroy the charts on component unmount
    return () => {
      lineChart.destroy();
      pieChart.destroy();
      barChart.destroy();
      heatMap.destroy();
      treeMap.destroy();
      gaugeChart.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      <Navibar/>
    <div className='dashboard-container'>
    
    <div className='dashboard'>
       <div style={{marginLeft:'70px',color: 'white'}}><h2>Dashboard</h2><h4>Raw Data into Data-Driven Insights</h4></div>
      <div className='dashboard-row'>
      <div id="pieChart" style={{ borderRadius: '8px', backgroundColor: 'white', boxShadow: '30px',paddingBottom:'30px' }}>
        {/* Pie Chart will be rendered here */}
      </div>
      <div id="barChart" style={{  borderRadius: '8px', backgroundColor: 'white', boxShadow: '30px',paddingBottom:'30px' }}>
        {/* Bar Chart will be rendered here */}
      </div>
      <div id="heatMap" style={{ borderRadius: '8px', backgroundColor: 'white', boxShadow: '30px',paddingBottom:'30px' }}>
        {/* Bar Chart will be rendered here */}
      </div>
      </div>
      <div className='dashboard-row'>
      <div id="lineChart" style={{ borderRadius: '8px', backgroundColor: 'white', boxShadow: '30px',paddingBottom:'30px' }}>
        {/* Line Chart will be rendered here */}
      </div>
      <div id="gaugeChart" style={{  borderRadius: '8px', backgroundColor: 'white', boxShadow: '30px',paddingBottom:'30px' }}>
        {/* Bar Chart will be rendered here */}
      </div>
      <div id="treeMap" style={{  borderRadius: '8px', backgroundColor: 'white', boxShadow: '30px',paddingBottom:'30px' }}>
        {/* Bar Chart will be rendered here */}
      </div>
      </div>
      <center><p>*datas displayed here are sample datas used for testing the working of the website and have variations with actual design plan</p></center>
    </div>
    </div>
    </div>
  );
};

export default Dashboard;