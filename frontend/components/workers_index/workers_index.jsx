import React from 'react';
import { hashHistory } from 'react-router';

const WorkersIndexItem = ({worker}) => (
  <div className="workers-index-item">
    <h3>{worker.username}</h3>
    <img src={worker.picture_url} />
    <p>{worker.bio}</p>
  </div>
);

class WorkersIndex extends React.Component {
  constructor(props) {
    super(props);
    this.redirectTo = this.redirectTo.bind(this);
  }

  componentDidMount() {
    this.props.getWorkers();
  }

  redirectTo(str) {
    return () => {
      hashHistory.push(`/workers/${str}`);
      console.log("redirectTo called");
    };
  }

  render() {
    const workers = this.props.workers;
    let workerIds = Object.keys(workers);
    console.log(workers);

    const  workersArray = workerIds.map((id) => (
      <WorkersIndexItem key={id}
                        worker={workers[id]}
                        onClick={this.redirectTo(id)}/>
    ));

    return (
      <div className="workers-index">
        <h1>We offer the best young workers around!</h1>
        { workersArray }
      </div>
    );
  }
}

export default WorkersIndex;
