import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <nav className='navbar'>
    <ul>
      <li>
        <Link to={"/home"}>Home</Link>
      </li>

      <li>
        <Link to={"/workers"}>Workers</Link>
      </li>

      <li>
        <Link to={"/jobs"}>Jobs</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
