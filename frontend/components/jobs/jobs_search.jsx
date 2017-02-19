import React from 'react';

import JobsIndex from './jobs_index';

import JobsMap from '../maps/jobs_map';

class JobsSearch extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    <div className='jobs-search'>
      <JobsMap />
      <JobsIndex
        jobsArray={this.props.jobsArray}
        jobs={this.props.jobs}
        currentUser={this.props.currentUser}
        openJobForm={this.props.openJobForm}
        fetchJobs={this.props.fetchJobs}
      />
    </div>
  }
}

export default JobsSearch;
