import React, { Component } from 'react';

class CountyDetailComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const county = this.props.county;
    return (
      <div id={`county-${ this.props.county.id }`} className="county-detail">
        <ul>
          <li>Name: { county.name }</li>
          <li>State: { county.state }</li>
        </ul>
      </div>
    );
  }
}

export default CountyDetailComponent;
