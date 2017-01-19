import { connect } from 'react-redux';

import { takeJob } from '../../util/job_api_util';

import { closeModal } from '../../actions/modal_actions';

import { resetErrors, receiveErrors } from '../../actions/session_actions';

import JobFormModal from './job_form_modal';

const mapStateToProps = (state, {params}) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  jobFormIsOpen: state.modals.jobFormModal
});

const mapDispatchToProps = dispatch => ({
  closeModal: (modalName) => dispatch(closeModal(modalName)),
  resetErrors: () => dispatch(resetErrors()),
  addJob: (job) => dispatch(addJob(job)),
  editJob: (job) => dispatch(editJob(job))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobFormModal);
