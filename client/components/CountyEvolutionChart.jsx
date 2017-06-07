import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class CountyEvolutionChart extends Component {
  constructor(props) {
    super(props);
  }

  columns() {
    let columns = [
      { type: 'string', label: 'Year' }
    ];

    const dataColumns = this.props.countyIndicators
      .filter((countyIndicator) => countyIndicator.metrics.length > 0)
      .map((countyIndicator) => (
        { type: 'number', label: countyIndicator.indicator.name }
      ));

    return columns.concat(dataColumns);
  }

  rows() {
    const simplifiedIndicators = this.props.countyIndicators
      .map((countyIndicator) => (
        countyIndicator.metrics
          .concat()
          .sort((a, b) => a.year - b.year)
          .map((metric) => (
            [ metric.year.toString(), metric.peopleNumber ]
          ))
      ));

    // Assumption: if an indicator has metrics for a certain year range
    // then the other indicators include the same range. No more, no less years
    // This way we treat arrays assuming they have the same length
    let rows = simplifiedIndicators[0];

    for (let i = 1; i < simplifiedIndicators.length; i++) {
      simplifiedIndicators[i].forEach((metric, index) => (
        (rows[index]).push(metric[1])
      ));
    }

    return rows;
  }

  options() {
    return {
      title: 'US indicators prevalence evolution between 2004 and 2013',
      hAxis: {
        title: 'Year'
      },
      vAxis: {
        title: 'People number'
      }
    }
  }

  render() {
    return <Chart
      chartType="LineChart"
      rows={ this.rows() }
      columns={ this.columns() }
      options={ this.options() }
      width="100%"
      height="400px"
      legend_toggle />;
  }
}

export default CountyEvolutionChart;
