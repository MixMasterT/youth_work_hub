import React from 'react';
import { hashHistory } from 'react-router';

import JobsIndexItem from './jobs_index_item';

import JobsMap from '../maps/jobs_map';

class JobsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.redirectTo = this.redirectTo.bind(this);
  }

  componentDidMount() {
    this.props.fetchJobs();
  }

  componentWillReceiveProps(newProps) {
    if(this.props.currentUser === null && newProps.currentUser !== null) {
        newProps.fetchJobs();
    }
  }

  redirectTo(str) {
    return () => {
      hashHistory.push(`/jobs/${str}`);
    };
  }

  render() {
    const orderedJobs = this.props.jobsArray.sort((a, b) => {
      const aDate = new Date(a.start_time);
      const bDate = new Date(b.start_time);
      return  aDate > bDate;
    });

    const  jobsArray = orderedJobs.map((job) => (
      <JobsIndexItem className='jobs-index-item'
                     key={job.id}
                     job={job}
                     onClick={this.redirectTo(job.id)}
      />
    ));

    let postJobButton =
      <button className='add-job'
        onClick={this.props.openJobForm}>Post New Job
      </button>;

    let text = "Jobs You Have Posted";

    if(this.props.currentUser.isWorker) {
      postJobButton = "";
      text = "Jobs Available to You";
    }

    return (
      <div className="jobs-index-wrapper">
        { postJobButton }
        <h1>{text}</h1>
        <h3>Click on each job for more information!</h3>
        <div className="jobs-index">
          { jobsArray }
        </div>
      </div>
    );
  }
}

export default JobsIndex;
