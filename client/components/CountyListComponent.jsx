import React, { Component } from 'react';
import styles from '../public/stylesheets/counties.css';

class CountyListComponent extends Component {
  constructor(props) {
    super(props);
    this.renderCounty = this.renderCounty.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onCountyClick(event.target.dataset.id);
  }

  render() {
    return (
      <div className={ styles.counties }>
        <ul>
          { this.props.counties.map(this.renderCounty) }
        </ul>
      </div>
    );
  }

  renderCounty({ id, name, state }) {
    return (
      <li key={ id }>
        <a data-id={ id } onClick={ this.handleClick }>{ name }, { state }</a>
      </li>
    );
  }
}

export default CountyListComponent;
