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

  componentDidMount() {
    fetch('/api/counties')
      .then((response) => response.json())
      .then(this.handleData)
      .catch((error) => console.log('Counties fetching failed', error))
  }

  componentWillUnmount() {
    console.log('Counties list removed');
  }

  render() {
    return <CountyListComponent counties = { this.state.counties } />;
  }
}

export default CountyListContainer;
