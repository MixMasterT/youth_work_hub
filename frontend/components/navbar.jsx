import React from 'react';
import { Link, withRouter } from 'react-router';

import classnames from 'classnames';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const path = this.props.router.location.pathname;
    const home = (path.match(/\/home/)) ? 'current' : '';
    const workers = (path.match(/\/workers/)) ? 'current' : '';
    let jobs = (path.match(/\/jobs/)) ? 'current' : '';
    let myJobs = "";
    if(this.props.currentUser) {
      if(this.props.currentUser.isWorker) {
        myJobs =
                <ul>
                  <li>
                    <Link to={"/jobs/myJobs"}>My Jobs</Link>
                  </li>
                </ul>;
      }
    }
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

            <li className='dropper'>
              <Link className={jobs} to={"/jobs"}>Jobs</Link>
              <div className='drop-down'>
                {myJobs}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
