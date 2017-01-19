import React from 'react';
import { Link } from 'react-router';

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    if (this.props.currentUser.zip_code) {
      this.props.logoutWorker();
    } else {
      this.props.logout();
    }
    this.props.resetJobs();
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
      return (
        <div id="login-box">
          <section>
            <img alt="profile picture" src={member.picture_url} />
            <h3>Logout {member.username}</h3>
            <section className="popup logged-in">
              <button onClick={(member.zip_code) ?
                  this.openModal('workerSignupModal') :
                  this.openModal('signupModal')
              }>Edit Account</button>
            <button onClick={this.handleLogout}>Log out</button>
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
          <h3>Login</h3>
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
                >Employer Signup
              </button>
              <button
                onClick={this.openModal('workerSignupModal')}
                >Worker Signup
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
