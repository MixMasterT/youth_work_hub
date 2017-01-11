import React from 'react';
import LoginBoxContainer from './login_box/login_box_container';
const App = ({ children }) => (
  <div>
    <h1>Youth Work Hub</h1>
    <LoginBoxContainer />
    { children }
  </div>
);

export default App;
