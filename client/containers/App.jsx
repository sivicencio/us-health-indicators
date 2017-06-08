import React, { Component } from 'react';
import MainPage from '../components/MainPage';
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Search from '../components/Search';
import Mode from '../components/Mode';
import CountyListContainer from './CountyListContainer';
import CountyDetailContainer from './CountyDetailContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCountyClick = this.handleCountyClick.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
    this.handleMode = this.handleMode.bind(this);
    this.state = {
      selectedCounty: '',
      searchTerm: '',
      favoriteCountiesIds: [],
      mode: 'all'
    };
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
      this.setState((prevState) => {
        const favoriteCountiesIds = prevState.favoriteCountiesIds.concat(countyId);
        this.save("favoriteCountiesIds", favoriteCountiesIds);
        return { favoriteCountiesIds: favoriteCountiesIds }
      });
    } else {
      this.setState((prevState) => {
        const favoriteCountiesIds = prevState.favoriteCountiesIds.filter((id) => id !== countyId) ;
        this.save("favoriteCountiesIds", favoriteCountiesIds);
        return { favoriteCountiesIds: favoriteCountiesIds };
      });
    }
  }

  handleMode(mode) {
    this.setState({ mode: mode });
  }

  save(key, value) {
    if (window.localStorage) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  retrieveLocalData(key) {
    if (window.localStorage) {
      return localStorage.getItem(key);
    }
  }

  componentDidMount() {
    const favoriteCountiesIds = this.retrieveLocalData("favoriteCountiesIds");
    if (favoriteCountiesIds === null) return;

    this.setState({ favoriteCountiesIds: JSON.parse(favoriteCountiesIds) });
  }

  render() {
    return (
      <MainPage>
        <Sidebar>
          <Menu>
            <Header title="US Health Indicators" />
            <Search onSearchChange={ this.handleSearchChange }/>
            <Mode mode={ this.state.mode } onModeChange={ this.handleMode }/>
          </Menu>
          <CountyListContainer
            countyId={ this.state.selectedCounty }
            onCountyClick={ this.handleCountyClick }
            searchTerm={ this.state.searchTerm }
            favoriteCountiesIds={ this.state.favoriteCountiesIds }
            onFavoriteClick={ this.handleFavoriteClick }
            mode={ this.state.mode } />
        </Sidebar>
        <CountyDetailContainer
          countyId={ this.state.selectedCounty }
          favoriteCountiesIds={ this.state.favoriteCountiesIds } />
      </MainPage>
    );
  }
}

export default App;
