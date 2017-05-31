import React, { Component } from 'react';
import TitleComponent from '../components/TitleComponent';
import CountyListContainer from './CountyListContainer';

class App extends Component {
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

export default App;
