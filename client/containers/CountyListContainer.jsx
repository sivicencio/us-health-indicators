import React, { Component } from 'react';
import CountyListComponent from '../components/CountyListComponent';

class CountyListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { counties: [] };
    this.handleData = this.handleData.bind(this);
  }

  handleData(data) {
    this.setState({ counties: data });
  }

  filterFavorites(counties) {
    const favoriteCountiesIds = this.props.favoriteCountiesIds,
          mode = this.props.mode;

    if (mode !== 'favorites')
      return counties;

    return counties.filter((county) => favoriteCountiesIds.indexOf(county.id) > -1);
  }

  filterSearch(counties) {
    const searchTerm = this.props.searchTerm;

    if (searchTerm === '')
      return counties;

    return counties.filter((county) =>
      county.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
      county.state.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    );
  }

  filteredCounties() {
    let counties = Object.assign([], this.state.counties);

    counties = this.filterFavorites(counties);
    counties = this.filterSearch(counties);

    return counties;
  }

  componentDidMount() {
    fetch('/api/counties')
      .then((response) => response.json())
      .then(this.handleData)
      .catch((error) => console.log('Counties fetching failed', error));
  }

  render() {
    return <CountyListComponent
      counties = { this.filteredCounties() }
      favoriteCountiesIds={ this.props.favoriteCountiesIds }
      onCountyClick={ this.props.onCountyClick }
      onFavoriteClick={ this.props.onFavoriteClick } />;
  }
}

export default CountyListContainer;
