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
    if (worker) {
      return (
        <div className='worker-show'>
          <h2>Worker Profile</h2>
          <img src={worker.picture_url} />
          <div className='worker-show-text'>
            <h4>{worker.username}</h4>
            <label>bio:
              <p>{(worker.bio) ? worker.bio :
                    "This worker has not provided a biography."}
              </p>
            </label>
            <label>birth_date:
              <p>{(worker.birth_date) ? worker.birth_date :
                    "This worker's date is not in our records."}</p>
            </label>
            <label>zip_code:
              <p>{(worker.zip_code) ? worker.zip_code :
                    "This worker's zipcode is not available'."}</p>
            </label>
            <label>minimum desired wage:
              <p>{(worker.min_wage) ? worker.min_wage :
                    "This worker has not chosen a minimum wage."}</p>
            </label>
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
