import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

class LineChart extends Component {

  render() {
    const { data, xData, yData } = this.props;
    const style = {
      data: {color: '#fafafa'},
      labels: {fontSize: 12},
      parent: {border: "1px solid red"}
    }

    return (
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryAxis
          tickCount={4}
          tickFormat={['2014', '2015', '2016', '2017']}
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
    )
  }
}

export default LineChart;
