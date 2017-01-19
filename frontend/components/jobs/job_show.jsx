import React from 'react';

class JobShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchJob(this.props.jobId);
  }

  render() {
    const job = this.props.job;
    if (job) {
      const date = new Date(job.start_time);
      const dateString = date.toDateString();
      const time = date.toTimeString().split(/\s/)[0];
      return (
        <div className='worker-show'>
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
