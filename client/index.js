import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'promise-polyfill';
import setAsap from 'setasap';
import AppContainer from './containers/AppContainer';

Promise._immediateFn = setAsap;

if (!window.Promise) {
  window.Promise = Promise;
}

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root')
);
