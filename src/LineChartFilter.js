import React, { Component } from 'react';
import './LineChartFilter.css';

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

LineChartFilter.propTypes = {
  handleTotalFilter: React.PropTypes.func.isRequired,
  handleSalesFilter: React.PropTypes.func.isRequired,
  handleEngineeringFilter: React.PropTypes.func.isRequired,
  handleSupportFilter: React.PropTypes.func.isRequired
}

export default LineChartFilter;
