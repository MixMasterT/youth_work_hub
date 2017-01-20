import React from 'react';

import { Link } from 'react-router';

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

      let acceptButton = "";

      if (this.props.currentUser && this.props.currentUser.isWorker) {
        acceptButton = <button className='accept-job'
                          onClick={this.takeJob}
                       >Accept Job</button>;
      }

      return (
        <div className='job-show'>
          <div className='job-show-details'>
            <Link to="/jobs">Back to all Jobs</Link>
            <h2><span>{job.job_type}
            </span> Job on: <span>{dateString}</span></h2>

            <table>
              <tr>
                <th>Type of work</th>
                <th>{job.job_type}</th>
              </tr>

              <tr>
                <td>description: </td>
                <td>{job.description}</td>
              </tr>

              <tr>
                <td>address: </td>
                <td>{(job.address) ? job.address :
                      "This job's address was not specified'."}</td>
              </tr>

              <tr>
                <td>time: </td>
                <td>{time}</td>
              </tr>

              <tr>
                <td>hourly wage: </td>
                <td>${job.wage} per hour</td>
              </tr>

              <tr>
                <td>duration of job: </td>
                <td>{job.duration} hours</td>
              </tr>

              <tr>
                <td>total cost: </td>
                <td>${job.cost}</td>
              </tr>
              <tr>
                <td>status: </td>
                <td>${job.status}</td>
              </tr>

            </table>
          </div>
          { this.props.currentUser.isWorker ? acceptButton : "" }
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
