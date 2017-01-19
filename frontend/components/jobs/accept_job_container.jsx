import { connect } from 'react-redux';

import { takeJob } from '../../util/job_api_util';

import { closeModal } from '../../actions/modal_actions';

import { resetErrors, receiveErrors } from '../../actions/session_actions';

import AcceptJobForm from './accept_job_form';

const mapStateToProps = (state, {params}) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  acceptJobModalIsOpen: state.modals.acceptJobModal,
  job: state.jobDetail
});

const mapDispatchToProps = dispatch => ({
  closeModal: (modalName) => dispatch(closeModal(modalName)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  resetErrors: () => dispatch(resetErrors()),
  takeJob: (jobId, workerId) => takeJob(jobId, workerId)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AcceptJobForm);
