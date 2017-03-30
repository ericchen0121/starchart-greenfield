import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

class BarChart extends Component {
  render() {
    const {data, xData, yData} = this.props;
    const style = {
      data: {fill: "#058ef2", width: 9},
      labels: {fontSize: 12},
      parent: {border: "1px solid red"}
    }


    return (
      <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickFormat={data.map((d) => d[xData])}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `$${x/1000}k`}
        />
        <VictoryBar
          animate={true}
          data={data}
          x={xData}
          y={yData}
          style={style}
        />
      </VictoryChart>
    )
  }
}

export default BarChart;
