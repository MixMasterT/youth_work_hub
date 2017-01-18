import React from 'react';
import { hashHistory } from 'react-router';

// const JobsIndexItem = ({job, onClick}) => (
//   <div className="workers-index-item" onClick={onClick}>
//     <img src={worker.picture_url} />
//     <div className='details'>
//       <div className='name'>
//         <label>Name:</label>
//         <h3>{worker.username}</h3>
//       </div>
//       <div className='bio'>
//         <label>bio:</label>
//         <p>{worker.bio}</p>
//       </div>
//     </div>
//   </div>
// );

class JobsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.redirectTo = this.redirectTo.bind(this);
  }

  componentDidMount() {
    this.props.fetchJobs();
  }

  redirectTo(str) {
    return () => {
      hashHistory.push(`/jobs/${str}`);
    };
  }

  render() {
    // const workers = this.props.workers;
    // let workerIds = Object.keys(workers);
    //
    // const  workersArray = workerIds.map((id) => (
    //   <JobsIndexItem key={id}
    //                     worker={workers[id]}
    //                     onClick={this.redirectTo(id)}/>
    // ));
    if (this.props.currentUser) {
      const text = this.props.currentUser.isWorker ?
      "Jobs Available to You" :
      "Jobs You Have Posted";

      return (
        <div className="workers-index">
          <h1>{text}</h1>
          <button className='add-job'
                  onClick={this.props.openJobForm}>Post New Job
          </button>
        </div>
      );
    } else {
      return (
        <div className="workers-index">
          <h1>Please log in or sign up to post or view jobs.</h1>
        </div>
      );
    }
  }
}

export default JobsIndex;
