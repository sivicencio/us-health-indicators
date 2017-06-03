import React, { Component } from 'react';
import styles from '../public/stylesheets/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={ styles.header }>
        <h1>{ this.props.title || '' }</h1>
      </header>
    );
  }
}

export default Header;
