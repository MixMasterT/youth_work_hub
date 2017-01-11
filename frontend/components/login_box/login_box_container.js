import { connect } from 'react-redux';

import { login, signup, logout } from '../../actions/session_actions';

import LoginBox from './login_box';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginBox);
