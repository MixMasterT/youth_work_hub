import { connect } from 'react-redux';

import { loginWorker,
         editWorker,
         signupWorker } from '../../actions/worker_actions';

import { openModal, closeModal } from '../../actions/modal_actions';

import { resetErrors, frontendErrors } from '../../actions/session_actions';

import WorkerSignupModal from './worker_signup_form_modal';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  workerSignupFormIsOpen: state.modals.workerSignupModal
});

const mapDispatchToProps = dispatch => ({
  frontendErrors: (errs) => dispatch(frontendErrors(errs)),
  login: (cred) => dispatch(loginWorker(cred)),
  signup: (user) => dispatch(signupWorker(user)),
  edit: (worker) => dispatch(editWorker(worker)),
  resetErrors: () => dispatch(resetErrors()),
  openModal: (modalName) => dispatch(openModal(modalName)),
  closeModal: () => dispatch(closeModal('workerSignupModal'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkerSignupModal);
