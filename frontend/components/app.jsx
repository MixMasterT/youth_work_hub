import React from 'react';
import Header from './header';
import Navbar from './navbar';
import LoginModalContainer from './login_form/login_modal_container';
import SignupModalContainer from './signup_form/signup_modal_container';
import JobFormContainer from './job_form/job_form_container';
import WorkerSignupFormContainer from './worker_signup/worker_signup_form_container';

const App = ({ children }) => (
  <div>
    <LoginModalContainer />
    <SignupModalContainer />
    <WorkerSignupFormContainer />
    <JobFormContainer />
    <Header />
    <Navbar />
    { children }
  </div>
);

export default App;
