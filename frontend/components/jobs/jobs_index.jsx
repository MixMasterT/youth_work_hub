import React from 'react';

import { hashHistory } from 'react-router';

import JobsList from './jobs_list';

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
    const pastJobs = [];
    const futureJobs = [];

    const orderedJobs = this.props.jobsArray.sort((a, b) => {
      const aDate = new Date(a.start_time);
      const bDate = new Date(b.start_time);
      return  aDate > bDate;
    });

    const now = new Date();

    orderedJobs.forEach((job) => {
      if (new Date(job.start_time) < now) {
        pastJobs.push(job);
      } else {
        futureJobs.push(job);
      }
    })

    let postJobButton =
      <button className='add-job'
        onClick={this.props.openJobForm}>Post New Job
      </button>;

    let text = "Jobs You Have Posted";
    let subText = "Click on each job for more information!"
    let pastText = "Past jobs you have posted"

    if(futureJobs.length === 0) {
      text = "You do not have any upcoming jobs posted.";
      subText = "";
    }

    if(this.props.currentUser.isWorker) {
      postJobButton = "";
      text = "Jobs Available to You";
      pastText = "Your past jobs";

      if(futureJobs.length === 0) {
        text = "Sorry, there are no jobs available in your area."
      }
    }

    return (
      <div className="jobs-index-wrapper">
        { postJobButton }
        <div className="jobs-index">
          <h2>{text}</h2>
          <h3>{subText}</h3>
          <JobsList jobs={futureJobs} onClick={this.redirectTo} />
          <h2>{pastText}</h2>
          <JobsList jobs={pastJobs} onClick={this.redirectTo} />
        </div>
      </div>
    );
  }
}

export default JobsIndex;
