import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

class BarChart extends Component {
  render() {
    const {data, xData, yData} = this.props;

    return (
      <VictoryChart
        domainPadding={20}
      >
        <VictoryAxis
          tickFormat={data.map((d) => d[xData])}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `$${x/1000}k`}
        />
        <VictoryBar
          data={data}
          x={xData}
          y={yData}
        />
      </VictoryChart>
    )
  }
}

export default BarChart;
