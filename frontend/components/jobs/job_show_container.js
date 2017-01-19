import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';

import { fetchJob, fetchJobs } from '../../actions/job_actions';

import JobShow from './job_show';

const mapStateToProps = (state, {params})=> ({
  jobId: params['jobId'],
  job: state.jobDetail,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, {params}) => ({
  fetchJob: (id) => dispatch(fetchJob(id)),
  fetchJobs: () => dispatch(fetchJobs()),
  openModal: (modalName) => dispatch(openModal(modalName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobShow);
