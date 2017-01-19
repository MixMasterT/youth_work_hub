import React from 'react';
import { Link, hashHistory, Router, Route } from 'react-router';

import classnames from 'classnames';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <nav className='navbar'>
        <div className='inner'>
          <ul>
            <li>
              <Link className={`h`} to={"/home"}>Home</Link>
            </li>

            <li>
              <Link className={`w`} to={"/workers"}>Workers</Link>
            </li>

            <li>
              <Link className={`j`} to={"/jobs"}>Jobs</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}



export default Navbar;
