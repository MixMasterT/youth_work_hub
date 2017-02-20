import React from 'react';

import { Link } from 'react-router';

// import JobReview from '../jobs/job_review';
import ReviewList from '../reviews/review_list';

class WorkerShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSingleWorker(this.props.workerId);
  }

  render() {
    const worker = this.props.worker;
    console.log(worker.age);
    let picUrl = worker.picture_url;
    if(picUrl === null) {
      picUrl = "http://res.cloudinary.com/youth-work-hub/image/upload/v1484946674/default-user_frye7s.png";
    }
    let reviews = "";

    if (worker.id) {
      if(worker.reviews.length > 0) {
        reviews = <ReviewList />
      }

      return (
        <div className='worker-show-wrapper'>
          <div className='worker-show'>

            <div className="name-pic">
              <h2>{worker.username}</h2>
              <img src={picUrl} alt='No picture provided' />
              <h3>Age:</h3>
              <h4>{(worker.birth_date) ? worker.birth_date :
                    "This worker's birth date is not in our records."}</h4>
              <h3>zipcode:</h3>
              <h4>{(worker.zip_code) ? worker.zip_code :
                  "information unavailable."}</h4>
            </div>
            <div className="wage-bio">
              <h2>{worker.username}'s bio:</h2>
              <p className="bio">{(worker.bio) ? worker.bio :
                    "This worker has not provided a biography."}</p>

              <h3>minimum wage: </h3>
              <h4>${(worker.min_wage) ? worker.min_wage :
                    "information unavailable."} per hour</h4>
            </div>
          </div>

          <div className='reviews'>
            { reviews }
          </div>

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
