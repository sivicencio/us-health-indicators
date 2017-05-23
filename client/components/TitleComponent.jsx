import React, { Component } from 'react';

class TitleComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>{ this.props.titleText || '' }</h1>
    );
  }
}

export default TitleComponent;
