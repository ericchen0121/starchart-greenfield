import React, { Component } from 'react';
import * as d3 from 'd3';
import BarChart from './BarChart';
import LineChart from './LineChart';
import LineChartFilter from './LineChartFilter';
import './App.css';

const data = [{date: '2017-03-01', dept: 'Sales', employee: 3, salary: 70000},
 {date: '2015-03-01', dept: 'Engineering', employee: 4, salary: 45000},
 {date: '2017-09-01', dept: 'Sales', employee: 4, salary: 60000},
 {date: '2016-03-01', dept: 'Sales', employee: 5, salary: 40000},
 {date: '2017-12-01', dept: 'Support', employee: 5, salary: 65000},
 {date: '2016-02-01', dept: 'Support', employee: 5, salary: 40000},
 {date: '2016-03-01', dept: 'Support', employee: 6, salary: 70000},
 {date: '2016-11-01', dept: 'Engineering', employee: 6, salary: 45000},
 {date: '2017-04-01', dept: 'Engineering', employee: 7, salary: 70000},
 {date: '2015-09-01', dept: 'Sales', employee: 7, salary: 55000},
 {date: '2017-11-01', dept: 'Support', employee: 7, salary: 50000},
 {date: '2015-08-01', dept: 'Engineering', employee: 7, salary: 65000},
 {date: '2015-08-01', dept: 'Engineering', employee: 8, salary: 60000},
 {date: '2017-11-01', dept: 'Sales', employee: 9, salary: 55000},
 {date: '2015-01-01', dept: 'Support', employee: 9, salary: 55000},
 {date: '2017-12-01', dept: 'Engineering', employee: 10, salary: 55000},
 {date: '2016-12-01', dept: 'Sales', employee: 10, salary: 50000},
 {date: '2017-04-01', dept: 'Engineering', employee: 10, salary: 70000},
 {date: '2016-11-01', dept: 'Support', employee: 11, salary: 75000},
 {date: '2016-08-01', dept: 'Sales', employee: 12, salary: 40000},
 {date: '2016-06-01', dept: 'Engineering', employee: 12, salary: 40000},
 {date: '2015-01-01', dept: 'Sales', employee: 12, salary: 40000},
 {date: '2015-11-01', dept: 'Support', employee: 12, salary: 45000},
 {date: '2016-03-01', dept: 'Sales', employee: 13, salary: 60000},
 {date: '2015-01-01', dept: 'Engineering', employee: 13, salary: 70000},
 {date: '2017-08-01', dept: 'Engineering', employee: 13, salary: 75000},
 {date: '2015-12-01', dept: 'Sales', employee: 14, salary: 60000},
 {date: '2017-07-01', dept: 'Support', employee: 16, salary: 60000},
 {date: '2016-12-01', dept: 'Engineering', employee: 17, salary: 45000},
 {date: '2017-11-01', dept: 'Engineering', employee: 18, salary: 45000},
 {date: '2015-03-01', dept: 'Engineering', employee: 20, salary: 45000},
 {date: '2016-06-01', dept: 'Sales', employee: 21, salary: 40000},
 {date: '2016-09-01', dept: 'Engineering', employee: 21, salary: 70000},
 {date: '2016-01-01', dept: 'Engineering', employee: 23, salary: 50000},
 {date: '2016-02-01', dept: 'Engineering', employee: 23, salary: 75000},
 {date: '2017-04-01', dept: 'Engineering', employee: 24, salary: 55000},
 {date: '2016-09-01', dept: 'Engineering', employee: 25, salary: 50000},
 {date: '2017-05-01', dept: 'Sales', employee: 28, salary: 60000},
 {date: '2017-10-01', dept: 'Support', employee: 29, salary: 40000},
 {date: '2017-06-01', dept: 'Engineering', employee: 30, salary: 70000}]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    }
  }

  componentWillMount() {
    this.calculateAndSetHeadCountData(this.state.data)
  }

  // Filters for LineChartFilter
  // TODO: can consolidate filters, ie. duplicate code
  // NOTE: unable to pass argument in LineChartFilter callback without errors
  // else could easily use switch statement
  //
  handleSalesFilter = () => {
    let {data} = this.state;
    let filteredSalesData = data.filter((d) => { return d.dept === 'Sales'})

    this.calculateAndSetHeadCountData(filteredSalesData)
  }

  handleEngineeringFilter = () => {
    let {data} = this.state;
    let filteredSalesData = data.filter((d) => { return d.dept === 'Engineering'})

    this.calculateAndSetHeadCountData(filteredSalesData)
  }

  handleSupportFilter = () => {
    let {data} = this.state;
    let filteredSalesData = data.filter((d) => { return d.dept === 'Support'})

    this.calculateAndSetHeadCountData(filteredSalesData)
  }

  handleTotalFilter = () => {
    let {data} = this.state;
    this.calculateAndSetHeadCountData(data)
  }

  // transforms data to calculate average
  //
  averageSalaryByDept = () => {
    const { data } = this.state;
    return d3.nest()
      .key((d) => d.dept)
      .rollup((v) => d3.mean(v, (d) => d.salary))
      .entries(data)
  }

  // recalculates and sets new headcount key in data on a given dataset
  //
  calculateAndSetHeadCountData(data) {

    let dataWithDates = data.map((d) => {
      d.date = new Date(d.date)
      return d;
    })
    // sorts from oldest to newest
    let timeAscendingData = dataWithDates.sort((a,b) => a.date - b.date)
    let dataWithHeadCount = timeAscendingData.map((d, index) => {
      d.headcount = index + 1;
      return d;
    })

    this.setState({headcountData: dataWithHeadCount});
  }

  // add a "label" key (which is necessary to render labels or tooltips to data
  // the "key" argument is what you want the data to be based on
  addLabelToData = (data, key) => {
    // console.log('um', data, key)
    // return data.map((d) => {
    //   d.label = d[key]
    // })
    return data;
  }

  render() {
    const {headcountData} = this.state;

    return (
      <div className='main_container'>
        <div className='chart'>
          <span className='chart_title'>AVERAGE SALARY</span>
          <BarChart data={this.addLabelToData(this.averageSalaryByDept(), 'value')} xData={'key'} yData={'value'}/>
        </div>
        <div className='chart'>
          <span className='chart_title'>EMPLOYEE HEADCOUNT</span>
          <LineChart scale={{x: "linear", y: "linear"}} data={headcountData} xData={
            'date'} yData={'headcount'} />
          <LineChartFilter
            handleTotalFilter={this.handleTotalFilter}
            handleSalesFilter={this.handleSalesFilter}
            handleEngineeringFilter={this.handleEngineeringFilter}
            handleSupportFilter={this.handleSupportFilter}
          />
        </div>
        <div>
          <a className='link' href='https://github.com/ericchen0121/starchart-greenfield'>View Github code</a>
        </div>
      </div>
    );
  }
}
export default App;
