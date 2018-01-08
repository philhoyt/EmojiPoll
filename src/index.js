import React from "react";
import { render } from "react-dom";
import Poll from "./Poll";
import Chart from "./Chart";
import "whatwg-fetch";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: []
    };
  }

  async handleData() {
    // console.log("Getting data");

    // const key = "keyOMKqR26EuImHkH";
    // const url =
    //   "https://api.airtable.com/v0/appHuijqYQJU98so4/EmojiPoll?maxRecords=200&view=Grid%20view&sortField=_createdTime&sortDirection=desc";

    // const resp = await fetch(url, {
    //   headers: {
    //     Authorization: `Bearer ${key}`
    //   }
    // });
    // const json = await resp.json();

    // console.log("Got data (showing first record): ", json.records[0]);

    // const pollData = {
    //   "👯": 0,
    //   "🍑": 0,
    //   "💥": 0,
    //   "🍕": 0,
    //   "☠️": 0
    // };

    // json.records.forEach(function (element, index) {
    //   pollData[element.fields["Emoji Choice"]]++;
    // });
    // console.log("Updated poll data: ", pollData);

    // //Turn Object into Array (for chart)
    // const chartData = [];
    // var i = 0;
    // for (var prop in pollData) {
    //   chartData[i] = { name: prop, count: pollData[prop] };
    //   i++;
    // }

    // this.setState({
    //   chartData: chartData
    // });

    // console.log("Made chart data: ", chartData);
  };

  async componentWillMount() {
    console.log("Getting data");

    const key = "keyOMKqR26EuImHkH";
    const url =
      "https://api.airtable.com/v0/appHuijqYQJU98so4/EmojiPoll?maxRecords=200&view=Grid%20view&sortField=_createdTime&sortDirection=desc";

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

    //Turn Object into Array of Objects (for chart)
    const chartData = [];
    var i = 0;
    for (var prop in pollData) {
      chartData[i] = { name: prop, count: pollData[prop] };
      i++;
    }

    this.setState({
      chartData: chartData
    });

    console.log("Made chart data: ", chartData);
  }

  render() {
    return (
      <div>
        <Poll />
        <Chart data={this.state.chartData} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
