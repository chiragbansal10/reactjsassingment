import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for the chart
const data = [
  { name: 'Jan', line1: 4000, line2: 2400, line3: 2400 },
  { name: 'Feb', line1: 3000, line2: 1398, line3: 2210 },
  { name: 'Mar', line1: 2000, line2: 9800, line3: 2290 },
  { name: 'Apr', line1: 2780, line2: 3908, line3: 2000 },
  { name: 'May', line1: 1890, line2: 4800, line3: 2181 },
  { name: 'Jun', line1: 2390, line2: 3800, line3: 2500 },
  { name: 'Jul', line1: 3490, line2: 4300, line3: 2100 },
];

const MultiLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="line1" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="line2" stroke="#82ca9d" />
        <Line type="monotone" dataKey="line3" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MultiLineChart;
