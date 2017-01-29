import React from 'react';
import { Link } from 'react-router';

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
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
      let picUrl = member.picture_url;
      if(picUrl === null) {
        picUrl = "http://res.cloudinary.com/youth-work-hub/image/upload/v1484946674/default-user_frye7s.png";
      }
      console.log(picUrl);
      return (
        <div id="login-box">
          <section>
            <img alt="profile picture" src={picUrl} />
            <h5 className='logout'>Logout</h5>
            <section className="popup logged-in">
              <button onClick={(member.isWorker) ?
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
            <i className="fa fa-user-plus fa-3x"
               aria-hidden="true"
               id="user-icon"
            ></i>
          <h5>Login/Signup</h5>
          <section className="popup-buttons">
              <button
                onClick={this.openModal('loginModal')}
                >Login
              </button>
              <button
                className='highlight'
                onClick={this.props.guestLogin.bind(this)}
                >Guest Employer
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
