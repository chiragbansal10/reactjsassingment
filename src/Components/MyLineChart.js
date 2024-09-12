
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const MyLineChart = () => {
  const data = {
    labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
    datasets: [
      {
        label: 'Active Service Provider',
        data: [3000, 3500, 2500, 3200, 2800, 2700, 2200],
        borderColor: 'rgba(255,93,141,1)',
        backgroundColor: 'rgba(255,93,141,0.2)',
      },
      {
        label: 'Service Provider Retention Rate',
        data: [1500, 2000, 1800, 2200, 3000, 2800, 3200],
        borderColor: 'rgba(114,187,255,1)',
        backgroundColor: 'rgba(114,187,255,0.2)',
      },
      {
        label: 'New Service Provider',
        data: [2300, 2400, 2100, 2600, 3100, 3500, 2800],
        borderColor: 'rgba(17,190,169,1)',
        backgroundColor: 'rgba(17,190,169,0.2)',
      },
      {
        label: 'Service Completion Rate',
        data: [2800, 3200, 2900, 3400, 2700, 2500, 3000],
        borderColor: 'rgba(255,131,77,1)',
        backgroundColor: 'rgba(255,131,77,0.2)',
      },
      {
        label: 'Total Service Provider',
        data: [3300, 3900, 4100, 3600, 4200, 4000, 3800],
        borderColor: 'rgba(250,24,255,1)',
        backgroundColor: 'rgba(250,24,255,0.2)',
      },
      {
        label: 'Average Rating',
        data: [4200, 4500, 4000, 4400, 4300, 4100, 4200],
        borderColor: 'rgba(251,188,5,1)',
        backgroundColor: 'rgba(251,188,5,0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        min: 1000, 
        max: 5000, 
        ticks: {
          stepSize: 1000,
        },
        grid: {
          display: false, 
        },
      },
      x: {
        grid: {
          display: false, 
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom', 
        labels: {
          usePointStyle: true, 
          pointStyle: 'circle', 
          font: {
            weight: 'normal',
            size: 12, 
          },
          boxWidth: 8, 
          boxHeight: 8, 
          generateLabels: function (chart) {
            const labels = chart.data.datasets.map((dataset, i) => {
              return {
                text: dataset.label,
                fillStyle: dataset.borderColor, 
                strokeStyle: dataset.borderColor,
                lineWidth: 0, 
              };
            });
            return labels;
          },
        },
      },
      title: {
        display: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default MyLineChart;
