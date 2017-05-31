import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'promise-polyfill';
import setAsap from 'setasap';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';

Promise._immediateFn = setAsap;

if (!window.Promise) {
  window.Promise = Promise;
}

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App);

if (module.hot) module.hot.accept('./containers/App', () => render(App));
