import React from 'react';
import { Link } from 'react-router';

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.currentUser) {
      return (
        <div id="login-box">
          <h3>Hello {this.props.currentUser.username}</h3>
          <button onClick={this.props.logout}>Log out</button>
        </div>
      );
    } else {
      const path = location.pathname; // WHY IS PATH = NULL ???
      return (
        <div id="login-box">
          <Link to="login">Log In</Link>
          <Link to="signup">Sign up</Link>
        </div>
      );
    }
  }
}

export default LoginBox;
