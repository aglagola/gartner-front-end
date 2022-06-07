import React, { Component } from "react";
import Plot from "react-plotly.js";
import "./stock.css";

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xValues: [],
      yValues: [],
    };
  }

  async componentDidMount() {
    let API_Call = `http://localhost:8080/api`;
    const xValuesFunction = [];
    const yValuesFunction = [];
    const response = await fetch(API_Call);
    const data = await response.json();

    for (let key in data["Time Series (Daily)"]) {
      xValuesFunction.push(key);
      yValuesFunction.push(data["Time Series (Daily)"][key]["1. open"]);
    }
    this.setState({
      xValues: xValuesFunction,
      yValues: yValuesFunction,
    });
  }

  render() {
    return (
      <div>
        <h1>Stock Market Data</h1>
        <Plot
          data={[
            {
              x: this.state.xValues,
              y: this.state.yValues,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
            },
          ]}
          layout={{
            width: 920,
            height: 640,
            title: "Stock Market Data (IBM)",
          }}
        />
      </div>
    );
  }
}

export default Stock;
