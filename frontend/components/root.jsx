import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import LoginFormContainer from './login_form/login_form_container';
import SignupFormContainer from './signup_form/signup_form_container';

import App from './app';

const _redirectIfLoggedIn = (nextState, replace) => {
  const currentUser = store.getState().session.currentUser;
  if (currentUser) {
    replace('/');
  }
};

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } />
      <Route path="/login" component={ LoginFormContainer }
             onEnter={ _redirectIfLoggedIn}
      />
      <Route path="/signup" component={ SignupFormContainer }
             onEnter={ _redirectIfLoggedIn}
      />
    </Router>
  </Provider>
);

export default Root;
