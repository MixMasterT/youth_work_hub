import React from 'react';
import merge from 'lodash/merge';

class WorkerSignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({
      username: "",
      email: "",
      phone_number: "",
      picture_url: "",
      bio: "",
      birth_date: "",
      zip_code: "",
      lat: "",
      lng: "",
      min_wage: "",
      password: "",
      passwordCheck: ""
    }, this.props.currentUser);
    this.update = this.update.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
    this.activateCloudinaryWidget = this.activateCloudinaryWidget.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      this.props.edit(params).then(() => {
        this.props.closeModal();
      });
    } else {
      this.props.signup(this.state).then((worker) => {
        this.props.closeModal();
      });
    }
  }

  activateCloudinaryWidget() {
    cloudinary.openUploadWidget({ cloud_name: 'youth-work-hub',
                                  upload_preset: 'profile_pic' },
                                  (error, result) => {
        this.setState({picture_url: result[0].secure_url});
      });
  }

  render() {
    const errors = this.props.errors;
    const errList = <ul className="error-list">
                      {errors.map((er) => <li key={er}>{er}</li>)}
                    </ul>;
    let text = "Sign Up Worker";
    let password =
          <div>
            <div className='text-input'>
              <input type="password"
                onChange={this.update('password')}
                placeholder=" "
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

    if (this.props.currentUser && this.props.currentUser.isWorker) {
      text = "Edit Account";
      password = "";
    }
    const modalLink =
      <div className='modal-link'>
        <p>Already joined ? <span
          onClick={this.goToLogin}>login here</span>
        </p>
      </div>;
    const today = new Date();
    const minBirth = `${today.getFullYear()}-${today.getMonth()
                      }-${today.getDate() + 1}`;

    return (
      <div className='form'>

        {this.props.currentUser ? "" : modalLink}

        <h2>{text}</h2>

        {(errors.length > 0) ? errList : null }

        <form onSubmit={this.handleSubmit}>

          <div className='text-input'>
            <input type="text"
              id="username"
              placeholder=" "
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

          <div className='textarea-input'>
            <textarea id="bio"
              onChange={this.update('bio')}
              value={this.props.bio}
              placeholder=" "
            />
            <label for='bio'>Brief bio</label>
          </div>

          <div className='date-input'>
            <label for='date-of-birth'>Birthdate</label>
            <input type="date"
              id="date-of-birth"
              onChange={this.update('birth_date')}
              value={this.state.birth_date}
              placeholder=" "
              min={minBirth}
            />
          </div>

          <div className='text-input'>
            <input type="text"
              id="zipcode"
              placeholder=" "
              onChange={this.update('zip_code')}
              value={this.state.zip_code}
            />
            <label for='zipcode'>Zipcode</label>
          </div>

          <div className='number-input'>
            <label for='min-wage'>Min Wage ($/hr)</label>
            <input type="number"
              id="min-wage"
              placeholder=" "
              onChange={this.update('min_wage')}
              value={this.state.min_wage}
              min="0"
              step="1"
            />
          </div>

          <div className='photo-input'>
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

export default WorkerSignupForm;
