import { connect } from 'react-redux';

// import { login, signup, logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../actions/modal_actions';

import ModalTest from './modal_test';

const mapStateToProps = state => ({
  loginFormIsOpen: state.modals.loginModal,
});

const mapDispatchToProps = dispatch => ({
  closeModal: (modalName) => dispatch(closeModal(modalName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalTest);
