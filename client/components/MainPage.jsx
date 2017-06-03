import React, { Component } from 'react';
import styles from '../public/stylesheets/main.css';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ styles.main }>
        { this.props.children }
      </div>
    );
  }
}

export default MainPage;
