import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';

import SignupModal from './signup_modal';

const mapStateToProps = state => ({
  signupFormIsOpen: state.modals.signupModal
});

const mapDispatchToProps = dispatch => ({
  closeModal: (modalName) => dispatch(closeModal(modalName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupModal);
