import React, { useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./LineComparison.css"

function LineComparisonGraph() {
  const [data, setData] = useState({ x: [], y1: [], y2: [] });

 

  const graphData = [
    { name: 'January', sales: 4000, revenue: 2400 },
  { name: 'February', sales: 3000, revenue: 1398 },
  { name: 'March', sales: 2000, revenue: 9800 },
  { name: 'April', sales: 2780, revenue: 3908 },
  { name: 'May', sales: 1890, revenue: 4800 },
  { name: 'June', sales: 2390, revenue: 3800 },
  { name: 'July', sales: 3490, revenue: 4300 },
  ];

  return (
    <>
    <div className="chart">
    <LineChart width={600} height={400} data={graphData}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
    <Line type="monotone" dataKey="sales" stroke="#8884d8" />
    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
    <Tooltip />
    <Legend />
    </LineChart>
      <button className='print' onClick={() => window.print()}>Print Graph</button>
      </div>
      </>
  );
}

export default LineComparisonGraph;
