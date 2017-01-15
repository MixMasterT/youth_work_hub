import React from 'react';
import Header from './header';
import Navbar from './navbar';
import LoginModalContainer from './login_form/login_modal_container';
import SignupModalContainer from './signup_form/signup_modal_container';

const App = ({ children }) => (
  <div>
    <Header />
    <LoginModalContainer />
    <SignupModalContainer />
    <Navbar />
    { children }
  </div>
);

export default App;
