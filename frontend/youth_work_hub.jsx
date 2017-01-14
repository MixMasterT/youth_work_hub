import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Root from './components/root';

import { login } from './actions/session_actions';

import { signupWorker,
          loginWorker,
          logoutWorker } from './actions/worker_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {
      currentUser: window.currentUser,
      errors: []
    }
  };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.signupWorker = signupWorker;
  window.loginWorker = loginWorker;
  window.logoutWorker = logoutWorker;
  Modal.setAppElement(document.getElementById('root'));
  window.store = store;
 ReactDOM.render(<Root store={ store } />,
                  document.getElementById('root')
                );
});
