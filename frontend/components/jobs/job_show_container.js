import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';

import { fetchJob, fetchJobs } from '../../actions/job_actions';

import { takeJob } from '../../util/job_api_util';

import JobShow from './job_show';

const mapStateToProps = (state, {params})=> ({
  jobId: params['jobId'],
  job: state.jobDetail,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, {params}) => ({
  fetchJob: (id) => dispatch(fetchJob(id)),
  fetchJobs: () => dispatch(fetchJobs()),
  takeJob: (jobId, workerId) => takeJob(jobId, workerId),
  openModal: (modalName) => dispatch(openModal(modalName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobShow);
