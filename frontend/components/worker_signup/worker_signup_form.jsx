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
        this.props.login(worker);
        this.props.closeModal();
      });
    }
  }

  activateCloudinaryWidget() {
    cloudinary.openUploadWidget({ cloud_name: 'youth-work-hub',
                                  upload_preset: 'profile_pic' },
                                  (error, result) => {
        this.setState({picture_url: result[0].secure_url});
        // console.log("url = ", url);
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
            <label className='field'>Password {
                this.state.password.length < 6 &&
                this.state.password.length > 0 ?
                 "must be at least six characters long" :
                 ""
              }<br/>
              <input type="password"
                onChange={this.update('password')}
                value={this.state.password}
                required
                />
            </label>

            <label className='field'>Confirm-Password<br/>
              <input type="password"
                onChange={this.update('passwordCheck')}
                value={this.state.passwordCheck}
                required
                />
            </label>
          </div>;

    if (this.props.currentUser && this.props.currentUser.isWorker) {
      text = "Edit Account";
      password = "";
    }
    return(
      <div className='form'>
        <div className='modal-link'
             onClick={this.props.closeModal}>
          <h5>Already joined Login here</h5>
        </div>

        <h2>{text}</h2>

        {(errors.length > 0) ? errList : null }

        <form onSubmit={this.handleSubmit}>
          <label className='field'>Username<br/>
            <input type="text"
              onChange={this.update('username')}
              value={this.state.username}
              required
            />
          </label>

          <label className='field'>Email<br/>
            <input type="email"
              onChange={this.update('email')}
              value={this.state.email}
              required
            />
          </label>

          <label className='field'>Phone<br/>
            <input type="text"
              onChange={this.update('phone_number')}
              value={this.state.phone_number}
            />
          </label>

          <label className='field'>Brief Bio<br/>
            <input type="textarea"
                   onChange={this.update('bio')}
                   placeholder="Tell a bit about yourself"
                   value={this.state.bio}
            />
          </label>

          <label className='field'>Date of Birth<br/>
            <input type="date"
                   onChange={this.update('birth_date')}
                   value={this.state.birth_date}
            />
          </label>

          <label className='field'>Zipcode<br/>
            <input type="text"
                   onChange={this.update('zip_code')}
                   value={this.state.zip_code}
            />
          </label>

          <label className='field'>Minimum wage (in dollars per hour)<br/>
            <input type="number"
                   min="0"
                   step="1"
                   onChange={this.update('min_wage')}
                   value={this.state.min_wage}
            />
          </label>

          <label className='field'>Photo<br />
            <input onFocus={this.activateCloudinaryWidget}
                   type="url"
                   onChange={this.update('picture_url')}
                   value={this.state.picture_url}
            />
          </label>

          { password }

          <button type="submit">{text}</button>
        </form>
      </div>
    );
  }
}

export default WorkerSignupForm;
