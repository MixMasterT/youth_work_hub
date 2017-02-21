import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';

import { fetchJobs } from '../../actions/job_actions';

import { jobsArray } from '../../reducers/selectors';

import JobsSearch from './jobs_search';

const mapStateToProps = state => {
  return ({
    jobsArray: jobsArray(state),
    jobs: state.jobs,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  openJobForm: () => dispatch(openModal('jobFormModal')),
  fetchJobs: (filters) => dispatch(fetchJobs(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsSearch);
