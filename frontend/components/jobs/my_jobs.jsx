import React from 'react';

import JobsIndexItem from './jobs_index_item';

import { hashHistory } from 'react-router';

class MyJobs extends React.Component {
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
    const myOrderedJobs = this.props.myJobsArray.sort((a, b) => {
      const aDate = new Date(a.start_time);
      const bDate = new Date(b.start_time);
      return  aDate > bDate;
    });
    const  myJobsArray = myOrderedJobs.map((job) => (
      <JobsIndexItem className='jobs-index-item'
                     key={job.id}
                     job={job}
                     onClick={this.redirectTo(job.id)}/>
    ));

    let text = "You haven't accepted any jobs yet.";
    if (this.props.currentUser) {
      if(this.props.currentUser.isWorker) {
        if(myJobsArray.length > 0) {
          text = "Jobs You Have Agreed to Do";
        }
      }
      return (
        <div className="jobs-index">
          <h1>{text}</h1>
          <h3>Click on each job for more information!</h3>
          { myJobsArray }
        </div>
      );
    } else {
      return (
        <div>
          <h1>Please log in or sign up to post or view jobs.</h1>
        </div>
      );
    }
  }
}

export default MyJobs;
