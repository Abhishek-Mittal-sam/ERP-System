
import './chart.scss'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: "January",
      SB: 4000,
      TA: 2400,
      amt: 2400,
    },
    {
      name: "February",
      SB: 3000,
      TA: 1398,
      amt: 2210,
    },
    {
      name: "March",
      SB: 2000,
      TA: 9800,
      amt: 2290,
    },
    {
      name: "April",
      SB: 2780,
      TA: 3908,
      amt: 2000,
    },
    {
      name: "MAY",
      SB: 1890,
      TA: 4800,
      amt: 2181,
    },
    {
      name: "JUNE",
      SB: 2390,
      TA: 3800,
      amt: 2500,
    },
    {
      name: "JULY",
      SB: 3490,
      TA: 4300,
      amt: 2100,
    },
  ];
const Chart = ({ aspect, title }) => {
  return (


    <div className='chart'>
           <div className="title">{title} </div>
    <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="SB" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="TA" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    
  )
}

export default Chart
