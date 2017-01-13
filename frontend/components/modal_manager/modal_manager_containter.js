import { connect } from 'react-redux';

import { closeModals, closeModal } from '../../actions/session_actions';

import ModalManager from './modal_manager';

const mapStateToProps = state => ({
  modals: state.modals
});

const mapDispatchToProps = (dispatch) => ({
  closeModals: () => dispatch(closeModals()),
  closeModal: (modalName) => dispatch(closeModal(modalName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalManager);
