import React from 'react';
import { hashHistory } from 'react-router';

const WorkersIndexItem = ({worker, onClick}) => (
  <div className="workers-index-item" onClick={onClick}>
    <img src={worker.picture_url} />
    <div className='details'>
      <div className='name'>
        <label>Name:</label>
        <h3>{worker.username}</h3>
      </div>
      <div className='bio'>
        <label>bio:</label>
        <p>{worker.bio}</p>
      </div>
    </div>
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
    };
  }

  render() {
    const workers = this.props.workers;
    let workerIds = Object.keys(workers);
    console.log(workerIds);

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
