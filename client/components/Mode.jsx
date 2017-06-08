import React, { Component } from 'react';
import styles from '../public/stylesheets/mode.scss';

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
        <label className={ this.props.mode == 'all' ? [ "radio-inline", styles.active ].join(' ') : 'radio-inline' }>
          <input type="radio" value="all"
                 checked={ this.props.mode == 'all' }
                 onChange={ this.handleChange } />
          All
        </label>
        <label className={ this.props.mode == 'favorites' ? [ "radio-inline", styles.active ].join(' ') : 'radio-inline' }>
          <input type="radio" value="favorites"
                 checked={ this.props.mode == 'favorites' }
                 onChange={ this.handleChange } />
          Favorites
        </label>
      </div>
    );
  }
}

export default Mode;
