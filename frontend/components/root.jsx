import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import HomePage from './home_page/home_page';
import WorkersIndexContainer from './workers_index/workers_index_container';
import WorkerShowContainer from './worker_show/worker_show_container';

const _redirectIfLoggedIn = store => (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/');
  }
};
const _redirectUnlessLoggedIn = store => (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/');
  }
};
const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <Route path="/home" component={ HomePage } />
        <Route path="/workers" component={ WorkersIndexContainer } />
        <Route path="/workers/:workerId" component={ WorkerShowContainer } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
