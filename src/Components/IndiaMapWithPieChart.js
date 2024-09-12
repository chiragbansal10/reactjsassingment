import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Title } from 'chart.js';
import 'leaflet/dist/leaflet.css';

ChartJS.register(Tooltip, Legend, ArcElement, Title);


const data = {
  labels: ['Health Sector', 'Construction Sector', 'Home Service Sector', 'Petcare Sector', 'Entertainment Sector', 'Event Sector'],
  datasets: [
    {
      data: [25, 20, 15, 10, 20, 10],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E63946', '#6B8E23', '#FFD700'], 
      borderWidth: 0,
    },
  ],
};


const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Sector Distribution',
      font: {
        size: 16,
        weight: 'bold',
      },
      padding: {
        bottom: 20,
      },
    },
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw}%`; 
        },
      },
    },
    datalabels: {
      display: true,
      formatter: (value) => `${value}%`,
      color: 'black',
      font: {
        weight: 'bold',
        size: 14,
      },
    },
  },
  maintainAspectRatio: false,
};

const IndiaMapWithPieChart = () => {
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[20.5937, 78.9629]}>
        <Popup>
          <div style={{ width: '300px', height: '300px' }}>
            <h4>Sector Distribution</h4>
            <Pie data={data} options={options} />
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default IndiaMapWithPieChart;
