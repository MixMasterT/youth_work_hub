import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';

import LoginForm from './login_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: (cred) => dispatch(login(cred))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
