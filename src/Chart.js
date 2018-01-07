import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: []
    };
  }

  async componentWillMount() {
    console.log("Getting data");

    const key = "keyOMKqR26EuImHkH";
    const url = "https://api.airtable.com/v0/appHuijqYQJU98so4/EmojiPoll?maxRecords=200&view=Grid%20view&sortField=_createdTime&sortDirection=desc";

    const resp = await fetch(url, {
      headers: {
        Authorization: `Bearer ${key}`
      }
    });
    const json = await resp.json();

    console.log("Got data (showing first record): ", json.records[0]);
    
    const pollData = {
      "👯": 0,
      "🍑": 0,
      "💥": 0,
      "🍕": 0,
      "☠️": 0
    };

    json.records.forEach(function (element, index) {
      pollData[element.fields["Emoji Choice"]]++;
    });
    console.log("Updated poll data: ", pollData);

    //Turn Object into Array (for chart)
    const chartData = [];
    var i = 0;
    for (var prop in pollData) {
      chartData[i] = { name: prop, count: pollData[prop]};
      i++;
    }

    this.setState({
      chartData: chartData
    });

    console.log("Made chart data: ", chartData);
  }

  render() {
    return(
      <div>
        <h2>The last 100 votes</h2>
        <div>
          <BarChart width={600} height={300} data={this.state.chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    )
  }
}

export default Chart;