import React, { useRef } from 'react';
import { auth } from '../../library/firebase';

import '../../styles/SignupScreen.css';

const SignupScreen = () => {
  const emailRef = useRef(null);
  console.log(emailRef);
  const passwordRef = useRef(null);
  console.log(passwordRef);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  };

  const singIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  };
  return (
    <div className="signupScreen">
      <form className="signup__form">
        <h1>Sign In</h1>
        <input type="email" ref={emailRef} placeholder="Email"></input>
        <input type="password" ref={passwordRef} placeholder="Password"></input>
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
