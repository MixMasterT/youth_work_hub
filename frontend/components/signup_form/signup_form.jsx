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
      this.props.editUser(params);
    } else {
      this.props.signup(this.state).then(() => {
        hashHistory.push('/');
      });
    }
  }

  render() {
    const text = this.props.currentUser ? "Edit User" : "Sign Up";
    const errors = this.props.errors;
    const errList = <ul>
                      {errors.map((er) => <li key={er}>{er}</li>)}
                    </ul>;
    return(
      <div className='form'>
        <h2>{text}</h2>

        {(errors.length > 0) ? errList : null }

        <form onSubmit={this.handleSubmit}>
          <label>Username<br/>
            <input type="text"
              onChange={this.update('username')}
              value={this.state.username}
            />
          </label>

          <label>Email<br/>
            <input type="text"
              onChange={this.update('email')}
              value={this.state.email}
            />
          </label>

          <label>Phone<br/>
            <input type="text"
              onChange={this.update('phone_number')}
              value={this.state.phone_number}
            />
          </label>

          <label>Photo Link<br/>
            <input type="text"
              onChange={this.update('picture_url')}
              value={this.state.picture_url}
            />
          </label>

          <label>Password<br/>
            <input type="password"
              onChange={this.update('password')}
              value={this.state.password}
            />
          </label>

          <label>Confirm-Password<br/>
            <input type="password"
              onChange={this.update('passwordCheck')}
              value={this.state.passwordCheck}
            />
          </label>

          <input
            className="button"
            type="submit"
            value={text}
          />
        </form>
        <Link to="login">Log in</Link>
      </div>
    );
  }
}

export default SignupForm;
