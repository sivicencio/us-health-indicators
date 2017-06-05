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

  filteredCounties() {
    const searchTerm = this.props.searchTerm,
          favoriteCountiesIds = this.props.favoriteCountiesIds,
          mode = this.props.mode;

    let counties = Object.assign([], this.state.counties);

    if (mode === 'favorites') {
      counties = counties.filter((county) => favoriteCountiesIds.indexOf(county.id) > -1);
    }

    if (searchTerm === '' || counties.length === 0)
      return counties;

    return counties.filter((county) =>
      county.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
      county.state.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    );
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
