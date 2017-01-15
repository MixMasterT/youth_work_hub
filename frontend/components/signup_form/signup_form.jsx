import React from 'react';
import { Link, hashHistory } from 'react-router';
import merge from 'lodash/merge';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({
      username: "",
      email: "",
      phone_number: "",
      picture_url: "",
      password: "",
      passwordCheck: ""
    }, this.props.currentUser);
    this.update = this.update.bind(this);
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

  handleSubmit(e) {

    e.preventDefault();

    const state = this.state;
    console.log(state);
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
        hashHistory.push('/');
      });
    } else {
      this.props.signup(this.state).then(() => {
        hashHistory.push('/');
      });
    }
    this.props.closeModal('signupModal');
  }

  activateCloudinaryWidget() {
    let url = "";
    cloudinary.openUploadWidget({ cloud_name: 'youth-work-hub',
                                  upload_preset: 'to_png' },
                                  (error, result) => {
        console.log("error = ", error);
        console.log("result = ", result);
        url = result[0].url;
        this.setState({picture_url: url});
        console.log("url = ", url);
        console.log(this.state);
      });
  }

  render() {
    const errors = this.props.errors;
    const errList = <ul>
                      {errors.map((er) => <li key={er}>{er}</li>)}
                    </ul>;
    let text = "Sign Up";
    let password = <div>
                      <label className='field'>Password {
                          this.state.password.length < 6 &&
                          this.state.password.length > 0 ?
                           "must be at least six characters long" :
                           ""}
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
    if (this.props.currentUser) {
      text = "Edit Account";
      password = "";
    }
    return(
      <div className='form'>
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

          <label className='field'>Photo<br />
            <input onFocus={this.activateCloudinaryWidget}
                   onChange={this.update('picture_url')}
                   value={this.state.picture_url}
            />
          </label>

          { password }

          <button className="disabled" type="submit" disabled>{text}</button>
        </form>
        <Link to="login">Log in</Link>
      </div>
    );
  }
}

export default SignupForm;
