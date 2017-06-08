import React, { Component } from 'react';
import styles from '../public/stylesheets/menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ styles.menu }>
        { this.props.children }
      </div>
    );
  }
}

export default Menu;
