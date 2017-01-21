import React from 'react';
import Header from './header';
import NavbarContainer from './navbar_container';
import LoginModalContainer from './login_form/login_modal_container';
import SignupModalContainer from './signup_form/signup_modal_container';
import JobFormContainer from './job_form/job_form_container';
import AcceptJobContainer from './jobs/accept_job_container';
import WorkerSignupFormContainer from './worker_signup/worker_signup_form_container';

const App = ({ children }) => (
  <div>
    <LoginModalContainer />
    <SignupModalContainer />
    <WorkerSignupFormContainer />
    <JobFormContainer />
    <AcceptJobContainer />
    <Header />
    <NavbarContainer />
    { children }
  </div>
);

export default App;
