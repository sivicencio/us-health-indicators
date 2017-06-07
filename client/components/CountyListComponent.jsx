import React, { Component } from 'react';
import styles from '../public/stylesheets/counties.scss';

class CountyListComponent extends Component {
  constructor(props) {
    super(props);
    this.renderCounty = this.renderCounty.bind(this);
    this.renderFavorite = this.renderFavorite.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
  }

  handleClick(event) {
    this.props.onCountyClick(event.currentTarget.parentNode.dataset.id);
  }

  handleFavoriteClick(event) {
    this.props.onFavoriteClick(parseInt(event.currentTarget.parentNode.dataset.id));
  }

  render() {
    if (!this.props.counties.length) {
      return (
        <div className={ styles.counties }>
          Loading...
        </div>
      );
    }

    return (
      <div className={ styles.counties }>
        <ul>
          { this.props.counties.map(this.renderCounty) }
        </ul>
      </div>
    );
  }

  renderCounty({ id, name, state }) {
    return (
      <li key={ parseInt(id) } data-id={ id }>
        <a onClick={ this.handleClick }>
          { name }
          <span>{ state }</span>
        </a>
        { this.renderFavorite(id) }
      </li>
    );
  }

  renderFavorite(id) {
    const favoriteClass = this.props.favoriteCountiesIds.indexOf(id) > -1 ? 'fa fa-heart' : 'fa fa-heart-o';

    return (
      <a onClick={ this.handleFavoriteClick }>
        <i className={ favoriteClass }></i>
      </a>
    );
  }
}

export default CountyListComponent;
