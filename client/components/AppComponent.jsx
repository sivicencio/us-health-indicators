import React, { Component } from 'react';
import TitleComponent from './TitleComponent';
import CountyListComponent from './CountyListComponent';

class AppComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TitleComponent titleText="US Health Indicators" />
        <CountyListComponent />
      </div>
    );
  }
}

export default AppComponent;
