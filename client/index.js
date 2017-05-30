import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'promise-polyfill';
import setAsap from 'setasap';
import AppComponent from './components/AppComponent';

Promise._immediateFn = setAsap;

if (!window.Promise) {
  window.Promise = Promise;
}

ReactDOM.render(
  <AppComponent />,
  document.getElementById('root')
);
