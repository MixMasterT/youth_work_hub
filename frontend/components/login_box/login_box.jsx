import React from 'react';
import { Link } from 'react-router';

const LoginBox = ({currentUser, logout}) => {
  console.log("The currentUser is : ", currentUser);
  if (currentUser) {
    return (
      <div>
        <h3>Hello {currentUser.username}</h3>
        <button onClick={logout}>Log out</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="login">Log In</Link>
        <Link to="signup">Sign up</Link>
      </div>
    );
  }
};

export default LoginBox;
