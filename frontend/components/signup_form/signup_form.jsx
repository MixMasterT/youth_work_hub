import React from 'react';
import { Link, hashHistory } from 'react-router';
import merge from 'lodash/merge';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({
      name: "",
      email: "",
      phone_number: "",
      bio: "",
      zip_code: "",
      picture_url: "",
      password: "",
      passwordCheck: ""
    }, this.props.currentUser);
    this.update = this.update.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.activateCloudinaryWidget = this.activateCloudinaryWidget.bind(this);
  }

  update(field) {
    return e => { this.setState({[field]: e.target.value}); };
  }

  validatePassword() {
    const passCheck = this.state.passwordCheck;
    return (passCheck.length > 5 &&
      this.state.password === this.state.passwordCheck);
  }

  goToLogin() {
    this.props.closeModal('signupModal');
    this.props.openModal('loginModal');
  }

  handleSubmit(e) {
    console.log(this.state.password);
    console.log(this.state.passwordCheck);
    if(this.state.password !== this.state.passwordCheck) {
      this.props.frontendErrors(["passwords do not match"]);
    } else {
      e.preventDefault();

      const state = this.state;
      if (this.props.currentUser) {
        const paramsKeys = Object.keys(state).map((key) => {
          if (state[key] !== "" && state[key] !== null) {
            return key;
          }
        });
        const params = {};
        paramsKeys.forEach((k) => { params[k] = state[k]; });
        params['id'] = this.state.id;
        this.props.editUser(params).then(() => {
          this.props.closeModal('signupModal');
        });
      } else {
        this.props.signup(this.state).then(() => {
          this.props.closeModal('signupModal');
        });
      }
    }
  }

  activateCloudinaryWidget(e) {
    e.preventDefault();
    cloudinary.openUploadWidget({ cloud_name: 'youth-work-hub',
                                  upload_preset: 'cropped_profile' },
                                  (error, result) => {
        this.setState({picture_url: result[0].secure_url});
      }
    );
  }

  render() {
    const errors = this.props.errors;
    const errList = <ul className='error-list'>
                      {errors.map((er) => <li key={er}>{er}</li>)}
                    </ul>;
    let text = "Sign Up";
    let password =
          <div>
            <div className='text-input'>
              <input type="password"
                placeholder=" "
                onChange={this.update('password')}
                value={this.state.password}
                required
                />
              <label for='password'>Password</label>
            </div>

            <div className='text-input'>
              <input type="password"
                placeholder=" "
                onChange={this.update('passwordCheck')}
                value={this.state.passwordCheck}
                required
                />
              <label for='passwordCheck'>Confirm Password</label>
            </div>
          </div>;

    if (this.props.currentUser) {
      text = "Edit Account";
      password = "";
    }

    const modalLink =
      <div className='modal-link'>
        <p>Already a member ? <span
          onClick={this.goToLogin}>login here</span>
        </p>
      </div>;

    return (
      <div className='form'>

        {this.props.currentUser ? "" : modalLink}

        <h2>{text}</h2>
        {(errors.length > 0) ? errList : null }

        <form onSubmit={this.handleSubmit}>
          <div className='text-input'>
            <input type="text"
              placeholder=" "
              id="username"
              onChange={this.update('username')}
              value={this.state.username}
              required
              />
            <label for='userame'>Name</label>
          </div>

          <div className='text-input'>
            <input type="email"
              id="email"
              placeholder=" "
              onChange={this.update('email')}
              value={this.state.email}
              required
              />
            <label for='email'>Email</label>
          </div>

          <div className='text-input'>
            <input type="text"
              id="phone"
              placeholder=" "
              onChange={this.update('phone_number')}
              value={this.state.phone_number}
              required
              />
            <label for='phone_number'>Phone</label>
          </div>

          <div className='photo-input'>
            <i class="fa fa-camera fa-3x" aria-hidden="true"></i>
            <button className='photo-button' onClick={this.activateCloudinaryWidget}>
              Upload Photo
            </button>
          </div>

          { password }

          <button type="submit">{text}</button>
        </form>

      </div>
    );
  }
}

export default SignupForm;
