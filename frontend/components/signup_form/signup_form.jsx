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
      this.props.editUser(params).then(() => {
        hashHistory.push('/');
      });
    } else {
      this.props.signup(this.state).then(() => {
        hashHistory.push('/');
      });
    }
  }

  render() {
    const errors = this.props.errors;
    const errList = <ul>
                      {errors.map((er) => <li key={er}>{er}</li>)}
                    </ul>;
    let text = "Sign Up";
    let password = <div>
                      <label className='field'>Password<br/>
                        <input type="password"
                          onChange={this.update('password')}
                          value={this.state.password}
                          />
                      </label>

                      <label className='field'>Confirm-Password<br/>
                        <input type="passwordCheck"
                          onChange={this.update('password')}
                          value={this.state.password}
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
            />
          </label>

          <label className='field'>Email<br/>
            <input type="text"
              onChange={this.update('email')}
              value={this.state.email}
            />
          </label>

          <label className='field'>Phone<br/>
            <input type="text"
              onChange={this.update('phone_number')}
              value={this.state.phone_number}
            />
          </label>

          <label className='field'>Photo Link<br/>
            <input type="text"
              onChange={this.update('picture_url')}
              value={this.state.picture_url}
            />
          </label>

          { password }

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
