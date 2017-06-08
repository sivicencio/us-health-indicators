import React, { Component } from 'react';
import styles from '../public/stylesheets/search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSearchChange(event.target.value);
  }

  render() {
    return (
      <div className={ styles.search }>
        <fieldset>
          <input onChange={ this.handleChange } className="form-control" placeholder="Enter county or state..." />
        </fieldset>
      </div>
    );
  }
}

export default Search;
