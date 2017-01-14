import { connect } from 'react-redux';

import { login, signup, logout } from '../../actions/session_actions';
import { logoutWorker } from '../../actions/worker_actions';
import { openModal, closeModals } from '../../actions/modal_actions';

import LoginBox from './login_box';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentWorker: state.session.currentWorker
});

const mapDispatchToProps = dispatch => ({
  openModal: (modalName) => dispatch(openModal(modalName)),
  logout: () => dispatch(logout()),
  logoutWorker: () => dispatch(logoutWorker())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginBox);
