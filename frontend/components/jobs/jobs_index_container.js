import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';

import { fetchJobs } from '../../actions/job_actions';

import JobsIndex from './jobs_index';

const mapStateToProps = state => ({
  jobs: state.jobs,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  openJobForm: () => dispatch(openModal('jobFormModal')),
  fetchJobs: () => dispatch(fetchJobs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsIndex);
