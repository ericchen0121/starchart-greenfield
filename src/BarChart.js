import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';

class BarChart extends Component {

  render() {
    const {data, xData, yData} = this.props;
    console.log('barchart', data)
    const style = {
      data: {fill: "#058ef2", width: 9},
      labels: {fontSize: 12}
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
          animate={{ delay: 500, duration: 2000 }}
          data={data}
          x={xData}
          y={yData}
          style={style}
          labelComponent={<VictoryTooltip/>}
        />
      </VictoryChart>
    )
  }
}

BarChart.defaultProps = {
    data: [],
    xData: 'x',
    yData: 'y'
}

BarChart.propTypes = {
  data: React.PropTypes.array,
  xData: React.PropTypes.string,
  yData: React.PropTypes.string,
}

export default BarChart;
