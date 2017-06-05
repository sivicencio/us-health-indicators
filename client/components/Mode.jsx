import React, { Component } from 'react';
import styles from '../public/stylesheets/mode.css';

class Mode extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onModeChange(event.target.value);
  }

  render() {
    return (
      <div className={ styles.mode }>
        <div className="radio">
          <label>
            <input type="radio" value="all"
                   checked={ this.props.mode == 'all' }
                   onChange={ this.handleChange } />
            All
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="favorites"
                   checked={ this.props.mode == 'favorites' }
                   onChange={ this.handleChange } />
            Favorites
          </label>
        </div>
      </div>
    );
  }
}

export default Mode;
