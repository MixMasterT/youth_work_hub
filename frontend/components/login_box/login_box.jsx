import React from 'react';
import { Link } from 'react-router';

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
  }
  openModal(modalName) {
    return (e) => {
      e.preventDefault();
      console.log(`${modalName} should open`);
      console.log(`${this.props.openModal}`);
      this.props.openModal(modalName);
    };
  }
  render() {
    this.props.openModal('signupModal');
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
          <button onClick={this.openModal('loginModal')}>Login</button>
          <button onClick={this.openModal('signupModal')}>Sign Up</button>
          <button onClick={this.props.closeModals}>Close Modals</button>
        </div>
      );
    }
  }
}

export default LoginBox;
