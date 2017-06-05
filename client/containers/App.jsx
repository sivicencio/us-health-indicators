import React, { Component } from 'react';
import MainPage from '../components/MainPage';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Search from '../components/Search';
import CountyListContainer from './CountyListContainer';
import CountyDetailContainer from './CountyDetailContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCountyClick = this.handleCountyClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.state = { selectedCounty: '', searchTerm: '' };
  }

  handleCountyClick(countyId) {
    this.setState({ selectedCounty: countyId });
  }

  handleSearchChange(term) {
    this.setState({ searchTerm: term })
  }

  render() {
    return (
      <MainPage>
        <Sidebar>
          <Header title="US Health Indicators" />
          <Search onSearchChange={ this.handleSearchChange }/>
          <CountyListContainer onCountyClick={ this.handleCountyClick } searchTerm={ this.state.searchTerm }/>
        </Sidebar>
        <CountyDetailContainer countyId={ this.state.selectedCounty } />
      </MainPage>
    );
  }
}

export default App;
