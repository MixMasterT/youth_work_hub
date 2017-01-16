import React from 'react';

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
  }

  componentDidMount() {
    this.props.getWorkers();
  }

  render() {
    const workers = this.props.workers;
    let workerIds = Object.keys(workers);
    console.log(workers);

    const  workersArray = workerIds.map((id) => (
      <WorkersIndexItem key={id} worker={workers[id]} />
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
