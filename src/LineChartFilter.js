import React, { Component } from 'react';

class LineChartFilter extends Component {

  render() {
    const { handleSalesFilter, handleTotalFilter, handleEngineeringFilter, handleSupportFilter } = this.props;
    return (
      <div>
        <button onClick={handleTotalFilter}>Total</button>
        <button onClick={handleSalesFilter}>Sales</button>
        <button onClick={handleEngineeringFilter}>Engineering</button>
        <button onClick={handleSupportFilter}>Support</button>
      </div>
    )
  }
}

export default LineChartFilter;
