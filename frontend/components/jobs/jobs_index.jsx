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
    console.log("I am rendering");
    const  jobsArray = this.props.jobsArray.map((job) => (
      <JobsIndexItem className='jobs-index-item'
                     key={job.id}
                     job={job}
                     onClick={this.redirectTo(job.id)}/>
    ));

    let postJobButton =
      <button className='add-job'
        onClick={this.props.openJobForm}>Post New Job
      </button>;

    let text = "Jobs You Have Posted";
    if (this.props.currentUser) {

      if(this.props.currentUser.isWorker) {
        postJobButton = "";
        text = "Jobs Available to You";
      }
      return (
        <div className="jobs-index">
          <h1>{text}</h1>
          <h3>Click job for more information!</h3>
          { jobsArray }
          { postJobButton }
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
