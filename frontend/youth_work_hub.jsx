import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Root from './components/root';

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

  Modal.setAppElement(document.getElementById('root'));
  ReactDOM.render(<Root store={ store } />,
                  document.getElementById('root')
                );
});
