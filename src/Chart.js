import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class Chart extends React.Component {
  render() {
    return(
      <div>
        <h2>The last 100 votes</h2>
        <div>
          <BarChart width={600} height={300} data={this.props.data}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
            <XAxis dataKey="name" />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    )
  }
}

export default Chart;