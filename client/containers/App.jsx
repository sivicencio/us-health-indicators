import React, { Component } from 'react';
import TitleComponent from '../components/TitleComponent';
import CountyListContainer from './CountyListContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCountyClick = this.handleCountyClick.bind(this);
    this.state = { selectedCounty: '' };
  }

  handleCountyClick(countyId) {
    this.setState({ selectedCounty: countyId })
  }

  render() {
    return (
      <div>
        <TitleComponent titleText="US Health Indicators" />
        <span>Current county: { this.state.selectedCounty }</span>
        <CountyListContainer onCountyClick={ this.handleCountyClick }/>
      </div>
    );
  }
}

export default App;
