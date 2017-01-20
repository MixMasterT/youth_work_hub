import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Root from './components/root';

import { login, frontendErrors } from './actions/session_actions';

import { signupWorker,
          loginWorker,
          logoutWorker,
          getWorkers } from './actions/worker_actions';

import { fetchJobs } from './actions/job_actions';


import { fetchWorkers } from './util/worker_api_util';
import { openModal } from './actions/modal_actions';
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
  window.fetchWorkers = fetchWorkers;
  window.getWorkers = getWorkers;
  window.openModal = openModal;
  window.signupWorker = signupWorker;
  window.loginWorker = loginWorker;
  window.logoutWorker = logoutWorker;
  window.frontendErrors = frontendErrors;

  window.fetchJobs = fetchJobs;
  Modal.setAppElement(document.getElementById('root'));
  window.store = store;
 ReactDOM.render(<Root store={ store } />,
                  document.getElementById('root')
                );
});
