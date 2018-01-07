import React from "react";
import { render } from "react-dom";
import Poll from "./Poll";
import Chart from "./Chart";
import "whatwg-fetch";

const styles = {
  fontFamily: "sans-serif",
};

const App = () => (
  <div style={styles}>
    <Poll />
    <Chart />
  </div>
);

render(<App />, document.getElementById("root"));
