import React, { Component } from 'react';
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

class LineChart extends Component {

  render() {
    const { data, xData, yData, handleSalesFilter } = this.props;
    const style = {
      data: {stroke: "#c33b33"},
      labels: {fontSize: 12},
      parent: {border: "1px solid red"}
    }

    console.log('linechart', data);

    return (
      <div>
        <button onClick={handleSalesFilter}>Sales</button>
        {/* <button onClick={handleEngineeringFilter}>Engineering</button>
        <button onClick={handleSupportFilter}>Support</button> */}
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
      </div>

    )
  }
}

export default LineChart;
