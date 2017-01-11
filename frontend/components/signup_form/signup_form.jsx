import React from 'react';
import { Link } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      phone_number: "",
      picture_url: "",
      password: "",
      passwordCheck: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }

  update(field) {
    return e => { this.setState({[field]: e.target.value}); };
  }

  componentDidUpdate() {
    const cu = this.props.currentUser;
    if (cu) {
      this.props.router.push("/");
    }
  }

  validatePassword() {
    const passCheck = this.state.passwordCheck;
    return (passCheck.length > 5 &&
      this.state.password === this.state.passwordCheck);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Signup clicked!");
    if (!(this.validatePassword())) {
      console.log("signup failed");
      this.props.router.push("signup");
    } else {
      console.log("Submitted: ", this.state);
      this.props.signup(this.state);
    }
  }

  render() {
    return(
      <div>
        <h2>Signup</h2>

        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text"
              onChange={this.update('username')}
              value={this.state.username}
            />
          </label>

          <label>Email
            <input type="text"
              onChange={this.update('email')}
              value={this.state.email}
            />
          </label>

          <label>Phone
            <input type="text"
              onChange={this.update('phone_number')}
              value={this.state.phone_number}
            />
          </label>

          <label>Photo Link
            <input type="text"
              onChange={this.update('picture_url')}
              value={this.state.picture_url}
            />
          </label>

          <label>Password
            <input type="password"
              onChange={this.update('password')}
              value={this.state.password}
            />
          </label>

          <label>Confirm-Password
            <input type="password"
              onChange={this.update('passwordCheck')}
              value={this.state.passwordCheck}
            />
          </label>

          <input type="submit" value="Signup" />
        </form>
        <Link to="login">Log in</Link>
      </div>
    );
  }
}

export default SignupForm;
