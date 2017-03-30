import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import * as d3 from 'd3';

class LineChart extends Component {

  render() {
    const { data, xData, yData } = this.props;
    const style = {
      data: {stroke: "#058ef2"},
      labels: {fontSize: 12}
    }

    const styleAxis = {
      // axis: {stroke: "#058ef2"},
      axisLabel: {fontSize: 16, padding: 20},
      // grid: {stroke: "grey"},
      ticks: {stroke: "grey"},
      tickLabels: {fontSize: 10, padding: 5}
    }

    return (
      <div>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryAxis
            tickCount={4}
            tickFormat={d3.timeFormat("%Y")}
            style={styleAxis}
          />
          <VictoryAxis
            dependentAxis
          />
          <VictoryLine theme={VictoryTheme.material}
            animate={{ duration: 2000 }}
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

LineChart.defaultProps = {
  data: [],
  xData: 'x',
  yData: 'y'
}

LineChart.propTypes = {
  data: React.PropTypes.array,
  xData: React.PropTypes.string,
  yData: React.PropTypes.string
}

export default LineChart;
