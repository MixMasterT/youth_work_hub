import React from 'react';

import { Link } from 'react-router';

import JobReview from '../jobs/job_review';

class WorkerShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSingleWorker(this.props.workerId);
  }

  render() {
    const worker = this.props.worker;
    let picUrl = worker.picture_url;
    if(picUrl === null) {
      picUrl = "http://res.cloudinary.com/youth-work-hub/image/upload/v1484946674/default-user_frye7s.png";
    }
    let reviews = "";

    if (worker.id) {
      if(worker.reviews.length > 0) {
        console.log("reviews = ", worker.reviews);
        reviews = worker.reviews.map((r) => {
          return <JobReview key={r.job_id} review={r} />;
        });
      }
      return (
        <div className='worker-show-wrapper'>
          <div className='worker-show'>
            <div className="name-bio">
              <h2>{worker.username}</h2>
              <h3>bio:</h3>
              <p>{(worker.bio) ? worker.bio :
                    "This worker has not provided a biography."}</p>
              <h3>birth_date:</h3>
              <h4>{(worker.birth_date) ? worker.birth_date :
                    "This worker's birth date is not in our records."}</h4>
            </div>
            <div className="details">
              <img src={picUrl} />
              <h3>zipcode:</h3>
              <h4>{(worker.zip_code) ? worker.zip_code :
                  "information unavailable."}</h4>
              <h3>minimum desired wage: </h3>
              <h4>${(worker.min_wage) ? worker.min_wage :
                    "information unavailable."} per hour</h4>
            </div>
          </div>
          { reviews }
          <Link to="/workers">Back to all Workers</Link>
        </div>
      );
    } else {
      return (
        <div className="worker-show-wrapper empty">
          <h2>Information about the worker you seek is not available.</h2>
        </div>
      );
    }
  }
}

export default WorkerShow;
