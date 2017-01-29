import React from 'react';

import { Link } from 'react-router';

import { takeJob } from '../../util/job_api_util';

import JobReview from './job_review';

class JobShow extends React.Component {
  constructor(props) {
    super(props);
    this.takeJob = this.takeJob.bind(this);
    this.giveFeedback = this.giveFeedback.bind(this);
  }

  componentDidMount() {
    this.props.fetchJob();
  }

  takeJob() {
    this.props.openModal('acceptJobModal');
  }

  giveFeedback() {
    this.props.openModal('jobFeedbackModal');
  }

  render() {
    const job = this.props.job;
    if (job.id) {
      const date = new Date(job.start_time);
      const dateString = date.toDateString();
      const time = date.toTimeString().split(/\s/)[0];

      let acceptButton = "";

      if (this.props.currentUser) {
        if (this.props.currentUser.isWorker &&
            this.props.job.status === 'pending') {
            acceptButton = <button className='accept-job'
              onClick={this.takeJob}
              >Accept Job</button>;
        }
      }

      let feedbackButton = "";

      if (this.props.currentUser &&
          this.props.job.status !== 'pending') {
        feedbackButton = <button className='give-feedback'
                          onClick={this.giveFeedback}
                          >{this.props.job.review ?
                           "Edit Review" :
                           "Give Feedback"}
                         </button>;
      }

      let review = "";
      if(this.props.job.review) {
        review = <JobReview review={this.props.job.review} />;
      }

      return (
        <div className='job-show'>
          <div className='job-show-details'>
            <Link to="/jobs">Back to all Jobs</Link>
            <h2><span>{job.job_type}
            </span> Job <span>{dateString}</span></h2>

            <table>
              <tbody>
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
                    <td>start time: </td>
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
                    <td>{job.status}</td>
                  </tr>
              </tbody>

            </table>
          </div>
          { review }
          { this.props.currentUser.isWorker ?
            acceptButton :
            feedbackButton }
        </div>
      );
    } else {
      return (
        <div className="job-show empty">
          <h2>Information about the job you seek is not available.</h2>
        </div>
      );
    }
  }
}

export default JobShow;
