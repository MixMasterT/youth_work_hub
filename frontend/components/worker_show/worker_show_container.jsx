import { connect } from 'react-redux';

import { getWorkers } from '../../actions/worker_actions';

import WorkerShow from './worker_show';

const mapStateToProps = (state, { params }) => {
  getWorkers();
  console.log("params = ", params);
  console.log("params = ", params['workerId']);
  return ({
    worker: state.workers[params['workerId']]
  });
};

const mapDispatchToProps = dispatch => ({
  getWorkers: () => dispatch(getWorkers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkerShow);
