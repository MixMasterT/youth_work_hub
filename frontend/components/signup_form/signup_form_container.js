import { connect } from 'react-redux';

import { editUser, signup } from '../../actions/session_actions';

import SignupForm from './signup_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => ({
  editUser: (user) => dispatch(editUser(user)),
  signup: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
