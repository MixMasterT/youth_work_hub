import React from 'react';

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
            <div>
              <h5>bio:</h5>
              <p>{(worker.bio) ? worker.bio :
                    "This worker has not provided a biography."}
              </p>
            </div>
            <div>
              <h5>birth_date:</h5>
              <p>{(worker.birth_date) ? worker.birth_date :
                    "This worker's date is not in our records."}</p>
                </div>
            <div>
              <h5>zip_code: {(worker.zip_code) ? worker.zip_code :
                  "information unavailable."}</h5>

            </div>
            <div>
              <h5>minimum desired wage: {(worker.min_wage) ? worker.min_wage :
                    "information unavailable."}</h5>
              </div>
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
