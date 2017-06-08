import React, { Component } from 'react';
import CountyEvolutionChart from './CountyEvolutionChart';
import styles from '../public/stylesheets/counties.scss';

class CountyDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.renderLatestMetric = this.renderLatestMetric.bind(this);
  }

  renderLatestMetric(countyIndicator) {
    if (countyIndicator.metrics.length == 0) return null;

    const latestMetric = countyIndicator.metrics[0];
    return (
      <tr key={ parseInt(latestMetric.id) }>
        <td>{ countyIndicator.indicator.name }</td>
        <td>{ latestMetric.year }</td>
        <td>{ latestMetric.peopleNumber }</td>
        <td>{ latestMetric.percent }%</td>
      </tr>
    )
  }

  render() {
    const county = this.props.county;
    if (county.id === undefined) {
      return (
        <div className={ styles.county }>
          <div className="container-fluid">
            Select a county from the list for details
          </div>
        </div>
      );
    }

    return (
      <div id={`county-${ this.props.county.id }`} className={ styles.county }>
        <div className="container-fluid">
          <span><i className={ this.props.favoriteCountiesIds.indexOf(county.id) > -1 ? 'fa fa-heart' : '' }></i></span>
          <h2>{ county.name }</h2>
          <h4>{ county.state }</h4>
          <span className={ styles.fipsCode}>FIPS code: { county.fipsCode }</span>

          <div className={ styles.indicators }>
            <h3>Latest Indicators</h3>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th style={ { width: "40%" } }>Indicator</th>
                    <th style={ { width: "20%" } }>Year</th>
                    <th style={ { width: "20%" } }>People Number</th>
                    <th style={ { width: "20%" } }>Percent</th>
                  </tr>
                </thead>
                <tbody>
                  { county.countyIndicators.map(this.renderLatestMetric) }
                </tbody>
              </table>
            </div>
          </div>

          <CountyEvolutionChart countyIndicators={ county.countyIndicators } />
        </div>
      </div>
    );
  }
}

export default CountyDetailComponent;
