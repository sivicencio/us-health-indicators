import React, { Component } from 'react';
import MainPage from '../components/MainPage';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
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
      <MainPage>
        <Sidebar>
          <Header title="US Health Indicators" />
          <CountyListContainer onCountyClick={ this.handleCountyClick } />
        </Sidebar>
        <CountyDetailContainer countyId={ this.state.selectedCounty } />
      </MainPage>
    );
  }
}

export default App;
