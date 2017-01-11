import { connect } from 'react-redux';

import { login, signup } from '../../actions/session_actions';

import SignupForm from './signup_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: (cred) => dispatch(login(cred)),
  signup: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
