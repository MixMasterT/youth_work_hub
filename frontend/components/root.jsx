import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import LoginFormContainer from './login_form/login_form_container';
import SignupFormContainer from './signup_form/signup_form_container';

import App from './app';
import HomePage from './home_page/home_page';
import LoginModal from './modal_test';
import LoginModalContainer from './modal_test_container';
import ModalManagerContainer from './modal_manager/modal_manager';

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
        <Route path="/login" component={ LoginFormContainer }
          onEnter={ _redirectIfLoggedIn(store)}
          />
        <Route path="/signup" component={ SignupFormContainer }
        />
      <Route path="/modal" component={ LoginModalContainer } />
      <Route path="/home" component={ HomePage } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
