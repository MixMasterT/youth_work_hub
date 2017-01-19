import React from 'react';
import { hashHistory } from 'react-router';

import JobsIndexItem from './jobs_index_item';

class JobsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.redirectTo = this.redirectTo.bind(this);
  }

  componentDidMount() {
    this.props.fetchJobs();
  }

  redirectTo(str) {
    return () => {
      hashHistory.push(`/jobs/${str}`);
    };
  }

  render() {
    const jobs = this.props.jobs;
    let jobIds = Object.keys(jobs);

    const  jobsArray = jobIds.map((id) => (
      <JobsIndexItem key={id}
                     job={jobs[id]}
                     onClick={this.redirectTo(id)}/>
    ));

    if (this.props.currentUser) {
      const text = this.props.currentUser.isWorker ?
      "Jobs Available to You" :
      "Jobs You Have Posted";

      return (
        <div className="workers-index">
          <h1>{text}</h1>
          { jobsArray }
          <button className='add-job'
                  onClick={this.props.openJobForm}>Post New Job
          </button>
        </div>
      );
    } else {
      return (
        <div className="workers-index">
          <h1>Please log in or sign up to post or view jobs.</h1>
        </div>
      );
    }
  }
}

export default JobsIndex;
