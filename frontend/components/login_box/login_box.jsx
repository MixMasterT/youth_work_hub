import React from 'react';
import { Link } from 'react-router';

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
  }
  openModal(modalName) {
    return (e) => {
      e.preventDefault();
      // console.log(`${modalName} should open`);
      // console.log(`${this.props.openModal}`);
      this.props.openModal(modalName);
    };
  }
  render() {
    this.props.openModal('signupModal');
    if (this.props.currentUser || this.props.currenWorker) {
      const member = this.props.currentUser || this.props.currenWorker;
      console.log("member = ", member);
      return (
        <div id="login-box">
          <h3>Hello {member.username}</h3>
          <button onClick={(member.isWorker) ?
                            this.props.logoutWorker :
                            this.props.logout
                          }>Log out</button>
        </div>
      );
    } else {
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
