import React from 'react';

import { Link } from 'react-router';

class WorkerShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSingleWorker(this.props.workerId);
  }

  render() {
    const worker = this.props.worker;
    if (worker.id) {
      return (
        <div className='worker-show'>
          <img src={worker.picture_url} />
          <div className='worker-show-text'>
            <h2>Worker Profile</h2>
            <h4>{worker.username}</h4>

              <table>
                <tr>
                  <th>Bio:</th>
                  <tr>{(worker.bio) ? worker.bio :
                        "This worker has not provided a biography."}</tr>
                </tr>
                <tr>
                  <th>birth_date:</th>
                  <tr>{(worker.birth_date) ? worker.birth_date :
                        "This worker's date is not in our records."}</tr>
                </tr>

                <tr>
                  <th>zipcode: </th>
                  <tr>{(worker.zip_code) ? worker.zip_code :
                      "information unavailable."}</tr>
                </tr>

                <tr>
                  <th>minimum desired wage: </th>
                  <tr>{(worker.min_wage) ? worker.min_wage :
                        "information unavailable."}</tr>
                </tr>
              </table>
              <Link to="/workers">Back to all Workers</Link>
          </div>
        </div>
      );
    } else {
      return (
        <h2>Information about the worker you seek is not available.</h2>
      );
    }
  }
}

export default WorkerShow;
