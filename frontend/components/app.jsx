import React from 'react';
import Header from './header';
import Navbar from './navbar';

const App = ({ children }) => (
  <div>
    <Header />
    <Navbar />
    { children }
  </div>
);

export default App;
