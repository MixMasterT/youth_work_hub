import React from 'react';
import { hashHistory } from 'react-router';

const WorkersIndexItem = ({worker, onClick}) => {
  let picUrl = worker.picture_url;
  if(picUrl === null) {
    picUrl = "http://res.cloudinary.com/youth-work-hub/image/upload/v1484946674/default-user_frye7s.png";
  }
  return(
    <div className="workers-index-item" onClick={onClick}>
      <img src={picUrl} />
      <div className='details'>
        <div className='name'>
          <h3>Name:</h3><h3>{worker.username}</h3>
        </div>
        <div className='bio'>
          <h4>Bio:</h4>
          <p>{worker.bio}</p>
        </div>
      </div>
    </div>
  );
}


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
