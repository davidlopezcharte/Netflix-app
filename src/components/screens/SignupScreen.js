import React from 'react';
import '../../styles/SignupScreen.css';

const SignupScreen = () => {
  const register = (e) => {
    e.preventDefault();
  };

  const singIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signupScreen">
      <form className="signup__form">
        <h1>Sign In</h1>
        <input type="email" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <button type="submit" onClick={singIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
