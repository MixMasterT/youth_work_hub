import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';

import Root from './components/root';

import { login } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.login = login;
  window.store = store;
 ReactDOM.render(<Root store={ store } />,
                  document.getElementById('root'));
});
