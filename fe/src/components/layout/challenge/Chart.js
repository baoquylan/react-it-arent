import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'A',
    uv: 5000,
    pv: 5000,
  },
  {
    name: 'B',
    uv: 4700,
    pv: 4598,
  },
  {
    name: 'C',
    uv: 3800,
    pv: 4000,
  },
  {
    name: 'D',
    uv: 4100,
    pv: 3908,
  },
  {
    name: 'E',
    uv: 3500,
    pv: 3200,

  },
  {
    name: 'F',
    uv: 2990,
    pv: 2800,

  },
  {
    name: 'G',
    uv: 2490,
    pv: 3800,

  },
  {
    name: 'H',
    uv: 2490,
    pv: 2700,

  },
  {
    name: 'K',
    uv: 1490,
    pv: 1300,

  },
];

export default function Chart() {



  return (
    <div style={{ width: '100%', height: 300, flex: 1, maxHeight: 300 ,maxWidth: 960}} className='chart'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          <Line type="monotone" dataKey="pv" stroke="#ffcc21" strokeWidth={2.5} />
          <Line type="monotone" dataKey="uv" stroke="#8fe9d0" strokeWidth={2.5} />
        </LineChart>
      </ResponsiveContainer>
    </div>

  );
};


