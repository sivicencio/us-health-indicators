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
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
    this.state = { selectedCounty: '', searchTerm: '', favoriteCountiesIds: [] };
  }

  handleCountyClick(countyId) {
    this.setState({ selectedCounty: countyId });
  }

  handleSearchChange(term) {
    this.setState({ searchTerm: term })
  }

  handleFavoriteClick(countyId) {
    const shouldAddFavorite = this.state.favoriteCountiesIds.indexOf(countyId) === -1;

    if (shouldAddFavorite) {
      this.setState((prevState) => ({ favoriteCountiesIds: prevState.favoriteCountiesIds.concat(countyId) }));
    } else {
      this.setState((prevState) => ({
        favoriteCountiesIds: prevState.favoriteCountiesIds.filter((id) => id !== countyId)
      }));
    }
  }

  render() {
    return (
      <MainPage>
        <Sidebar>
          <Header title="US Health Indicators" />
          <Search onSearchChange={ this.handleSearchChange }/>
          <CountyListContainer
            onCountyClick={ this.handleCountyClick }
            searchTerm={ this.state.searchTerm }
            favoriteCountiesIds={ this.state.favoriteCountiesIds }
            onFavoriteClick={ this.handleFavoriteClick } />
        </Sidebar>
        <CountyDetailContainer countyId={ this.state.selectedCounty } />
      </MainPage>
    );
  }
}

export default App;
