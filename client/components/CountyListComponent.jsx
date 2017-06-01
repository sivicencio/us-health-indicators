import React, { Component } from 'react';

class CountyListComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderCounty = this.renderCounty.bind(this);
  }

  handleClick(event) {
    this.props.onCountyClick(event.target.dataset.id);
  }

  render() {
    return (
      <ul className="county-list">
        {this.props.counties.map(this.renderCounty)}
      </ul>
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
