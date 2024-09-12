
import React from 'react';
import ReactDOM from 'react-dom';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Red', value: 12, color: '#FF6384' },
  { name: 'Blue', value: 19, color: '#36A2EB' },
  { name: 'Yellow', value: 3, color: '#FFCE56' },
  { name: 'Green', value: 5, color: '#4BC0C0' },
  { name: 'Purple', value: 2, color: '#9966FF' },
  { name: 'Orange', value: 3, color: '#FF9F40' }
];



const PieArcLabel = () => {
  


  return (
    <div className="text-center">
      <h2 className="text-gray-700 mb-4">Service Provider accross different Segments</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );

 
};

export default PieArcLabel;
