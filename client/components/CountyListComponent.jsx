import React, { Component } from 'react';

class CountyListComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="county-list">
        {this.props.counties.map(this.renderCounty)}
      </ul>
    );
  }

  renderCounty({ id, name, state }) {
    return <li key={ id }>{ name }, { state }</li>
  }
}

export default CountyListComponent;
