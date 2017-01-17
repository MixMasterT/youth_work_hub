import React from 'react';
import { Link } from 'react-router';

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
  }
  openModal(modalName) {
    return (e) => {
      e.preventDefault();
      this.props.openModal(modalName);
    };
  }
  render() {
    if (this.props.currentUser) {
      const member = this.props.currentUser;
      console.log(member);
      return (
        <div id="login-box">
          <section>
            <img alt="profile picture" src={member.picture_url} />
            <h3>Hello {member.username}</h3>
            <section className="popup logged-in">
              <button onClick={(member.isWorker) ?
                  this.openModal('workerSignupModal') :
                  this.openModal('signupModal')
              }>Edit Account</button>
              <button onClick={(member.isWorker) ?
                  this.props.logoutWorker :
                  this.props.logout
                }>Log out</button>
              </section>
          </section>
        </div>
      );
    } else {
      return (
        <div id="login-box">
          <section>
            <i className="fa fa-user-plus fa-5x"
               aria-hidden="true"
               id="user-icon"
            ></i>
          <section className="popup-buttons">
              <button
                onClick={this.openModal('loginModal')}
                >Login
              </button>
              <button
                className='highlight'
                onClick={this.props.guestLogin.bind(this)}
                >Guest
              </button>
              <button
                onClick={this.openModal('signupModal')}
                >Signup
              </button>
              <button
                onClick={this.openModal('workerSignupModal')}
                >Worker
              </button>
              <button
                className='highlight'
                onClick={this.props.guestWorkerLogin.bind(this)}
                >Guest Worker
              </button>
            </section>
          </section>
        </div>
      );
    }
  }
}

export default LoginBox;
