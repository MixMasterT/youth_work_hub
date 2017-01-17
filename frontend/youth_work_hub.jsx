import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Root from './components/root';

import { login } from './actions/session_actions';

import { signupWorker,
          loginWorker,
          logoutWorker,
          getWorkers } from './actions/worker_actions';

import { addJob } from './actions/job_actions';
import { postJob, fetchJobs } from './util/job_api_util';

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
  window.addJob = addJob;
  window.postJob = postJob;
  window.fetchJobs = fetchJobs;
  Modal.setAppElement(document.getElementById('root'));
  window.store = store;
 ReactDOM.render(<Root store={ store } />,
                  document.getElementById('root')
                );
});
