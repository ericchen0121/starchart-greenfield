import React, { Component } from 'react';
import { VictoryLine, VictoryStack, VictoryAxis, VictoryTheme } from 'victory';

class LineMultipleChart extends Component {

  render() {
    const { data, xData, yData, handleSalesFilter } = this.props;
    const style = {
      data: {stroke: "#c33b33"},
      labels: {fontSize: 12},
      parent: {border: "1px solid red"}
    }
    const dataPlusOne = data.map((d) => {
      d.headcount = d.headcount + 10;
      return d;
    })

    console.log(dataPlusOne)
    return (
      <div>
        <button onClick={handleSalesFilter}>Sales</button>
        {/* <button onClick={handleEngineeringFilter}>Engineering</button>
        <button onClick={handleSupportFilter}>Support</button> */}
        <VictoryStack theme={VictoryTheme.material}>
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
          <VictoryLine theme={VictoryTheme.material}
            data={dataPlusOne}
            style={style}
            x={xData}
            y={yData}
          />
        </VictoryStack>
      </div>

    )
  }
}

export default LineMultipleChart;
