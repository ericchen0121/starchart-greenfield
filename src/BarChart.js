import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';

class BarChart extends Component {

  // add a "label" key (which is necessary to render labels or tooltips to data
  // the "key" argument is what you want the data to be based on
  addLabelFromKey() {
    let { data, labelFromKey } = this.props;
    return data.map((d) => {
      d.label = `$${ (d[labelFromKey] / 1000).toPrecision(3) }k`
    })
  }

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
        labelComponent={this.addLabelFromKey()}
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
