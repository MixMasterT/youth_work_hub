import React from 'react';

import JobsIndex from './jobs_index';

import JobsMap from '../maps/jobs_map';

class JobsSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div className='jobs-search'>
      <JobsMap
        jobs={this.props.jobs}
        currentUser={this.props.currentUser}
      />
      <JobsIndex
        jobsArray={this.props.jobsArray}
        currentUser={this.props.currentUser}
        openJobForm={this.props.openJobForm}
        fetchJobs={this.props.fetchJobs}
      />
    </div>
  )}
}

export default JobsSearch;
