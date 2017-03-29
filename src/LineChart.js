import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import * as d3 from 'd3';

class LineChart extends Component {

  render() {
    const { data, xData, yData, handleSalesFilter } = this.props;
    const style = {
      data: {stroke: "#c33b33"},
      labels: {fontSize: 12},
      parent: {border: "1px solid red"}
    }

    console.log('linechart: d3', d3);

    return (
      <div>
        <button onClick={handleSalesFilter}>Sales</button>
        {/* <button onClick={handleEngineeringFilter}>Engineering</button>
        <button onClick={handleSupportFilter}>Support</button> */}
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryAxis
            tickCount={5}
            tickFormat={d3.timeFormat("%Y")}
          />
          <VictoryAxis
            dependentAxis
          />
          <VictoryLine theme={VictoryTheme.material}
            data={data}
            style={style}
            x={xData}
            y={yData}
          />
        </VictoryChart>
      </div>

    )
  }
}

export default LineChart;
