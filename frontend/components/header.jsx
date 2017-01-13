import React from 'react';
import LoginBoxContainer from './login_box/login_box_container';
import Logo from './logo';

const Title = () => (
  <h1>Youth Work Hub</h1>
);

const Tagline= () => (
  <h5 className="tagline">Empower the youth...get your jobs done!</h5>
);

const Header = () => (
  <header className="header">
    <Logo />
    <div>
      <Title />
      <Tagline />
    </div>
    <LoginBoxContainer />
  </header>
);

export default Header;
