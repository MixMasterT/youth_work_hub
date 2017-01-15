import { connect } from 'react-redux';

import { loginWorker,
         editWorker,
         signupWorker } from '../../actions/worker_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import WorkerSignupModal from './worker_signup_form_modal';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  workerSignupFormIsOpen: state.modals.workerSignupModal
});

const mapDispatchToProps = dispatch => ({
  login: (cred) => dispatch(loginWorker(cred)),
  signup: (user) => dispatch(signupWorker(user)),
  edit: (worker) => dispatch(editWorker(worker)),
  openModal: (modalName) => dispatch(openModal(modalName)),
  closeModal: () => dispatch(closeModal('workerSignupModal'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkerSignupModal);
