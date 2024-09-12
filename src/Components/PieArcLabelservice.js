import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Yellow', value: 5, color: '#ffe603' },
  { name: 'Red', value: 3, color: '#ff0000' },
  { name: 'Green', value: 12, color: '#3fe900' },
];

const PieArcLabelservice = () => {
  return (
    <div className="text-center">
     
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}  
          cy={150}  
          innerRadius={40}
          outerRadius={80}
          fill="#8884d8"
         
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

export default PieArcLabelservice;
