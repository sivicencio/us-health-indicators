import React, { Component } from 'react';
import styles from '../public/stylesheets/counties.css';

class CountyDetailComponent extends Component {
  constructor(props) {
    super(props);
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
        <ul>
          <li>Name: { county.name }</li>
          <li>State: { county.state }</li>
          <li>Indicators: { county.countyIndicators.map((ci) =>
            `${ ci.indicator.name } (${ ci.metrics[0].year })`
            ).join(', ') }</li>
        </ul>
      </div>
    );
  }
}

export default CountyDetailComponent;
