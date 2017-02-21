import React from 'react';

import JobsIndex from './jobs_index';

import JobsMap from '../maps/jobs_map';

class JobsSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      bounds: this.props.jobsArray
    })
  }

  render() {
    if (this.props.currentUser) {
      if (this.props.currentUser.isWorker) {
        return (
          <div className='jobs-search'>
            <JobsMap
              jobsArray={this.props.jobsArray}
              currentUser={this.props.currentUser}
              fetchJobs={this.props.fetchJobs}
              />
            <JobsIndex
              jobsArray={this.props.jobsArray}
              currentUser={this.props.currentUser}
              openJobForm={this.props.openJobForm}
              fetchJobs={this.props.fetchJobs}
              />
          </div>
        )
      } else {
        return (
          <div className='jobs-search'>
            <JobsIndex
              jobsArray={this.props.jobsArray}
              currentUser={this.props.currentUser}
              openJobForm={this.props.openJobForm}
              fetchJobs={this.props.fetchJobs}
              />
          </div>
        )
      }

    } else {
      return (
        <div className="empty">
          <div className="workers-index">
            <h1>Please log in or sign up to post or view jobs.</h1>
          </div>
        </div>
      )
    }
  }
}

export default JobsSearch;
