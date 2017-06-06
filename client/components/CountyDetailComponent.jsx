import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import styles from '../public/stylesheets/counties.css';

class CountyDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.renderLatestMetric = this.renderLatestMetric.bind(this);
    this.renderChart = this.renderChart.bind(this);
  }

  renderLatestMetric(countyIndicator) {
    if (countyIndicator.metrics.length == 0) return null;

    const latestMetric = countyIndicator.metrics[0];
    return (
      <li key={ parseInt(latestMetric.id) }>
        <h4>{ countyIndicator.indicator.name } in { latestMetric.year }</h4>
        <span>{ latestMetric.peopleNumber } people ({ latestMetric.percent }%)</span>
      </li>
    )
  }

  render() {
    const county = this.props.county;
    if (county.id === undefined) {
      return (
        <div className={ styles.county }>
          Select a county from the list for details
        </div>
      );
    }

    return (
      <div id={`county-${ this.props.county.id }`} className={ styles.county }>
        <span>{ this.props.favoriteCountiesIds.indexOf(county.id) > -1 ? 'Favorite' : '' }</span>
        <h2>{ county.name }</h2>
        <h4>{ county.state }</h4>
        <span>{ county.fipsCode }</span>

        <div className={ styles.indicators }>
          <h3>Latest Indicators</h3>
          <ul>
            { county.countyIndicators.map(this.renderLatestMetric) }
          </ul>
        </div>

        { this.renderChart() }
      </div>
    );
  }

  renderChart() {
    const countyIndicators = this.props.county.countyIndicators;
    let columns = [
      { type: 'string', label: 'Year' }
    ];

    columns = columns.concat(countyIndicators
          .filter((countyIndicator) => countyIndicator.metrics.length > 0)
          .map((countyIndicator) => (
            { type: 'number', label: countyIndicator.indicator.name }
          )));

    const simplifiedIndicators = countyIndicators.map((countyIndicator) => (
      countyIndicator.metrics
        .concat()
        .sort((a, b) => a.year - b.year)
        .map((metric) => (
          [ metric.year.toString(), metric.peopleNumber ]
        ))
    ));

    // Assumption: if an indicator has metrics, then it covers from 2004 to 2013
    // This way we treat arrays assuming they have the same length
    let rows = simplifiedIndicators[0];

    for(let i = 1; i < simplifiedIndicators.length; i++) {
      simplifiedIndicators[i].forEach((metric, index) => (
        (rows[index]).push(metric[1])
      ));
    }

    return (
      <Chart
        chartType="LineChart"
        rows={ rows }
        columns={ columns }
        options={{
          title: 'US indicators prevalence evolution between 2004 and 2013',
          hAxis: {
            title: 'Year'
          },
          vAxis: {
            title: 'People number'
          }
        }}
        width="100%"
        height="400px"
        legend_toggle
      />
    );
  }
}

export default CountyDetailComponent;
