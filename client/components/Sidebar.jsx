import React, { Component } from 'react';
import styles from '../public/stylesheets/sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ styles.sidebar }>
        { this.props.children }
      </div>
    );
  }
}

export default Sidebar;
