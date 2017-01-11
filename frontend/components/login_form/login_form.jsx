import React from 'react';
import { Link } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    console.log("Login clicked!");
    this.props.login(this.state);
  }

  render() {
    return(
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text"
              onChange={this.update('username')}
              value={this.state.username}
            />
          </label>
          <label>Password
            <input type="password"
              onChange={this.update('password')}
              value={this.state.password}
            />
          </label>
          <input type="submit" value="Login" />
        </form>
        <Link to="signup">Sign up</Link>
      </div>
    );
  }
}

export default LoginForm;
