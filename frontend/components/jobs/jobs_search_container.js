import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';

import { fetchJobs } from '../../actions/job_actions';

import { jobsArray } from '../../reducers/selectors';

import JobsIndex from './jobs_index';

const mapStateToProps = state => {
  return ({
    jobsArray: jobsArray(state),
    jobs: state.jobs,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  openJobForm: () => dispatch(openModal('jobFormModal')),
  fetchJobs: () => dispatch(fetchJobs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsIndex);
