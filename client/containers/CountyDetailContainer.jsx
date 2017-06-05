import React, { Component } from 'react';
import CountyDetailComponent from '../components/CountyDetailComponent';

class CountyDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.handleData = this.handleData.bind(this);
    this.state = { county: {} };
  }

  handleData(data) {
    this.setState({ county: data });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.countyId !== this.props.countyId) {
      fetch(`/api/counties/${ nextProps.countyId }/details`)
        .then((response) => response.json())
        .then(this.handleData)
        .catch((error) => console.log('Counties fetching failed', error));
    }
  }

  render() {
    return <CountyDetailComponent
      county = { this.state.county }
      favoriteCountiesIds={ this.props.favoriteCountiesIds } />;
  }
}

export default CountyDetailContainer;
