import React, {Component} from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  {name: 'Dia 1', aulas: 2},
  {name: 'Dia 2', aulas: 5},
  {name: 'Dia 3', aulas: 3},
  {name: 'Dia 4', aulas: 4},
  {name: 'Dia 5', aulas: 1},
  {name: 'Dia 6', aulas: 6},
  {name: 'Dia 7', aulas: 5},
  {name: 'Dia 8', aulas: 8},
  {name: 'Dia 9', aulas: 4},
  {name: 'Dia 10', aulas: 5},
  {name: 'Dia 11', aulas: 3},
  {name: 'Dia 12', aulas: 7},

];

class Grafico extends Component {
  
  render () {
    return (
    <ResponsiveContainer width="100%" height="100%" aspect={2.0}>
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
        <Line type='monotone' dataKey="aulas" stroke="#53C4CD" strokeWidth={3} activeDot={{ r: 8 }} />
        <CartesianGrid strokeDasharray='3 3'/>
        <Tooltip/>
        <YAxis/>
        <XAxis dataKey='name'/>
        <Legend />
      </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default Grafico;