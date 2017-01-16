import { connect } from 'react-redux';

import { fetchWorkers } from '../../actions/worker_actions';

import WorkersIndex from './workers_index';

const mapStateToProps = state => ({
  workers: state.workers
});

const mapDispatchToProps = dispatch => ({
  fetchWorkers: () => fetchWorkers()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkersIndex);
