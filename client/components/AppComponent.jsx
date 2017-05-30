import React, { Component } from 'react';
import TitleComponent from './TitleComponent';
import CountyListContainer from '../containers/CountyListContainer';

class AppComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TitleComponent titleText="US Health Indicators" />
        <CountyListContainer />
      </div>
    );
  }
}

export default AppComponent;
