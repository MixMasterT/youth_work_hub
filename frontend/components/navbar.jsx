import React from 'react';
import { Link, withRouter } from 'react-router';

import classnames from 'classnames';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const path = this.props.router.location.pathname;
    const home = (path.match(/\/home\//)) ? 'current' : '';
    const workers = (path.match(/\/workers\//)) ? 'current' : '';
    const jobs = (path.match(/\/jobs\//)) ? 'current' : '';
    return (
      <nav className='navbar'>
        <div className='inner'>
          <ul>
            <li>
              <Link className={home} to={"/home"}>Home</Link>
            </li>

            <li>
              <Link className={workers} to={"/workers"}>Workers</Link>
            </li>

            <li>
              <Link className={jobs} to={"/jobs"}>Jobs</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}



export default withRouter(Navbar);
