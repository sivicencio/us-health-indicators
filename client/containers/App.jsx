import React, { Component } from 'react';
import TitleComponent from '../components/TitleComponent';
import CountyListContainer from './CountyListContainer';
import CountyDetailContainer from './CountyDetailContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCountyClick = this.handleCountyClick.bind(this);
    this.state = { selectedCounty: '' };
  }

  handleCountyClick(countyId) {
    this.setState({ selectedCounty: countyId });
  }

  render() {
    return (
      <div>
        <TitleComponent titleText="US Health Indicators" />
        <CountyDetailContainer countyId={ this.state.selectedCounty } />
        <CountyListContainer onCountyClick={ this.handleCountyClick } />
      </div>
    );
  }
}

export default App;
