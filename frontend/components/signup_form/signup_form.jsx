import React from 'react';
import { Link } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      phone: "",
      photoLink: "",
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
    }
    this.props.signup(this.state);
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
              onChange={this.update('phone')}
              value={this.state.phone}
            />
          </label>

          <label>Photo Link
            <input type="text"
              onChange={this.update('photo')}
              value={this.state.photo}
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
              onChange={this.update('password')}
              value={this.state.password}
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
