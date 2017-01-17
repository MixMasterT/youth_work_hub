import React from 'react';

// class WorkerShow extends React.Component {
//   constructor(props) {
//     super(props);
//     this.fetchWorkers = this.fetchWorkers.bind(this);
//   }
//
//   fetchWorkers() {
//     this.props.getWorkers();
//   }
//
//   redirectTo(str) {
//     return () => {
//       hashHistory.push(`/workers/${str}`);
//     };
//   }
//
//   render() {
//     const workers = this.props.workers;
//     let workerIds = Object.keys(workers);
//     console.log(workerIds);
//
//     const  workersArray = workerIds.map((id) => (
//       <WorkerShowItem key={id}
//                         worker={workers[id]}
//                         onClick={this.redirectTo(id)}/>
//     ));
//
//     return (
//       <div className="workers-index">
//         <h1>We offer the best young workers around!</h1>
//         { workersArray }
//       </div>
//     );
//   }
// }

const WorkerShow = ({worker, getWorkers}) => {
  console.log(worker);
  if (worker) {
    return (
      <h2>This is a Worker Show page for {worker.username}</h2>
    );
  } else {
    getWorkers();
    return (
      <h3>Information on the worker you seek is currently unavailable.</h3>
    );
  }
};

export default WorkerShow;
