import React, { Component } from 'react';

class CountyListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { counties: [] };
  }

  componentDidMount() {
    console.log('Counties total: ' + this.state.counties.length);
  }

  componentWillUnmount() {
    console.log('Counties list removed');
  }

  render() {
    return (
      <ul className="county-list">
        {this.state.counties.map(county => (
          <li key={ county.id }>{ county.name }, { county.state }</li>
        ))}
      </ul>
    );
  }
}

export default CountyListComponent;
