import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
       const [data, setData] = useState([]);
       useEffect(() => {
              fetch('chartsdata.json')
                     .then(res => res.json())
                     .then(data => setData(data));
       }, [])
       return (
              <div class="container mx-auto grid grid-cols-2 gap-4">
                     <div className='py-8 px-8'>
                            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                   <Line type="monotone" dataKey="investment" stroke="#8884d8"></Line>
                                   <Line type="monotone" dataKey="sell" stroke="#228B22"></Line>
                                   <Line type="monotone" dataKey="revenue" stroke="#FF0000"></Line>
                                   <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                   <XAxis dataKey="month" />
                                   <YAxis></YAxis>
                                   <Tooltip></Tooltip>
                                   <Legend></Legend>
                            </LineChart>
                     </div>
                     <div className='py-8 px-8'>
                            <BarChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                   <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                                   <XAxis dataKey="month" />
                                   <YAxis />
                                   <Tooltip />
                                   <Legend />
                                   <Bar dataKey="sell" fill="#8884d8" />
                                   <Bar dataKey="revenue" fill="#82ca9d" />
                                   <Bar dataKey="investment" fill="#FF0000" />
                            </BarChart>
                     </div>
              </div >
       );
};

export default Dashboard;



// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];

// const renderLineChart = (
//   <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
//     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//     <XAxis dataKey="name" />
//     <YAxis />
//     <Tooltip />
//   </LineChart>
// );