import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';

import Root from './components/root';

import { login } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
 ReactDOM.render(<Root store={ store } />,
                  document.getElementById('root')
                );
});
