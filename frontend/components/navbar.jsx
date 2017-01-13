import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <div className="navbar">
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
  </div>
);

export default Navbar;
