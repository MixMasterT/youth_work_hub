import React from 'react';

import { takeJob } from '../../util/job_api_util';

class JobShow extends React.Component {
  constructor(props) {
    super(props);
    this.takeJob = this.takeJob.bind(this);
  }

  componentDidMount() {
    this.props.fetchJob(this.props.jobId);
  }

  takeJob() {
    this.props.openModal('acceptJobModal');
  }

  render() {
    const job = this.props.job;
    console.log(job);
    if (job.id) {
      const date = new Date(job.start_time);
      const dateString = date.toDateString();
      const time = date.toTimeString().split(/\s/)[0];
      const acceptButton = this.props.currentUser.zip_code ?
        (<button className='accept-job'
          onClick={this.takeJob}
          >Accept</button>) :
           "";

      return (
        <div className='job-show'>
          <h2>Job on: {dateString}</h2>
          <div className='job-show-details'>
            <h4>Type of work: {job.job_type}</h4>
            <label>description:
              <p>{job.description}</p>
            </label>
            <label>time:
              <p>{time}</p>
            </label>
            <label>address:
              <p>{(job.address) ? job.address :
                    "This job's address was not specified'."}</p>
            </label>
            <label>hourly wage:
              <p>${job.wage} per hour</p>
            </label>
            <label>duration of job:
              <p>${job.duration} hours</p>
            </label>
            <label>total cost:
              <p>${job.cost}</p>
            </label>

          </div>
          { this.props.currentUser.zip_code ? acceptButton : "" }
        </div>
      );
    } else {
      return (
        <h2>Information about the job you seek is not available.</h2>
      );
    }
  }
}

export default JobShow;
