import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

import LoginForm from './login_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  loginFormIsOpen: state.modals.LoginModal
});

const mapDispatchToProps = dispatch => ({
  login: (cred) => dispatch(login(cred)),
  closeLoginModal: () => dispatch(closeModal('loginModal'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
