import React from 'react';

import { takeJob } from '../../util/job_api_util';

class JobShow extends React.Component {
  constructor(props) {
    super(props);
    this.takeJob = this.takeJob.bind(this);
  }

  componentDidMount() {
    this.props.fetchJob();
  }

  takeJob() {
    this.props.openModal('acceptJobModal');
  }

  render() {
    const job = this.props.job;
    if (job.id) {
      const date = new Date(job.start_time);
      const dateString = date.toDateString();
      const time = date.toTimeString().split(/\s/)[0];
      const acceptButton = this.props.currentUser.zip_code ?
        (<button className='accept-job'
          onClick={this.takeJob}
          >Accept Job</button>) :
           "";

      return (
        <div className='job-show'>
          <div className='job-show-details'>
            <h2>Job on: {dateString}</h2>
            <h4>Type of work: {job.job_type}</h4>
            <div>
              <h5>description:</h5>
              <p>{job.description}</p>
            </div>
            <div>
              <h5>time:</h5>
              <p>{time}</p>
            </div>
            <div>
              <h5>address:</h5>
              <p>{(job.address) ? job.address :
                    "This job's address was not specified'."}</p>
                </div>
            <div>
              <h5>hourly wage:</h5>
              <p>${job.wage} per hour</p>
            </div>
            <div>
              <h5>duration of job:</h5>
              <p>${job.duration} hours</p>
            </div>
            <div>
              <h5>total cost::</h5>
              <p>${job.cost}</p>
            </div>

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
