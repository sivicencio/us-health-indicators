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
          <span>{ county.fipsCode }</span>

          <div className={ styles.indicators }>
            <h3>Latest Indicators</h3>
            <ul>
              { county.countyIndicators.map(this.renderLatestMetric) }
            </ul>
          </div>

          <CountyEvolutionChart countyIndicators={ county.countyIndicators } />
        </div>
      </div>
    );
  }
}

export default CountyDetailComponent;
