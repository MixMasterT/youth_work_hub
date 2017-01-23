import { connect } from 'react-redux';

import { giveFeedback, updateFeedback } from '../../actions/job_actions';

import { closeModal } from '../../actions/modal_actions';

import { resetErrors, receiveErrors } from '../../actions/session_actions';

import jobFeedbackModal from './accept_job_form';

const mapStateToProps = (state, {params}) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  jobFeedbackModalIsOpen: state.modals.jobFeedbackModal,
  job: state.jobDetail
});

const mapDispatchToProps = dispatch => ({
  closeModal: (modalName) => dispatch(closeModal(modalName)),
  resetErrors: () => dispatch(resetErrors()),
  giveFeedback: (feedback) => dispatch(giveFeedback(feedback)),
  updateFeedback: (feedback) => dispatch(updateFeedback(feedback))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(jobFeedbackModal);
