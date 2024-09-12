
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const data = [
  { month: "JAN", value1: 20, value2: 30 },
  { month: "FEB", value1: 30, value2: 40 },
  { month: "MAR", value1: 40, value2: 60 },
  { month: "APR", value1: 50, value2: 80 },
  { month: "MAY", value1: 60, value2: 90 },
  { month: "JUN", value1: 70, value2: 100 },
  { month: "JUL", value1: 80, value2: 90 },
  { month: "AUG", value1: 90, value2: 20 },
  { month: "SEP", value1: 100, value2: 30 },
  { month: "OCT", value1: 10, value2: 40 },
  { month: "NOV", value1: 20, value2: 50 },
  { month: "DEC", value1: 30, value2: 60 },
];

const LineChartComponent = () => {
  return (
    <div style={{ width: '450px', marginLeft:'1px'}}> 
      <ResponsiveContainer width="100%" height={340}> 
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
         
          <XAxis dataKey="month" interval={0} />
          <YAxis domain={[10, 100]} ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value1"
            stroke="#3fe900"
            strokeWidth={4}  
            dot={false} 
          />
          <Line
            type="monotone"
            dataKey="value2"
            stroke="#ffe603"
            strokeWidth={4} 
            dot={false} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
