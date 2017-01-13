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
      this.props.closeLoginModal();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    const errors = this.props.errors;
    const errList = <ul>{errors.map((er) => <li key={er}>{er}</li>)}</ul>;
    return(
      <div className='form'>
        <Link to="signup">Sign up</Link>
        <h2>Login</h2>
        {(errors.length > 0) ? errList : null }
        <form onSubmit={this.handleSubmit}>
          <label>Username<br />
            <input type="text"
              onChange={this.update('username')}
              value={this.state.username}
            />
          </label>
          <label>Password<br />
            <input type="password"
              onChange={this.update('password')}
              value={this.state.password}
            />
          </label>
          <input className="button" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
