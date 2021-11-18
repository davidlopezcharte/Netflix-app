import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { auth } from '../../library/firebase';
import '../../styles/SignupScreen.css';

const SignupScreen = ({ email }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [signIn, setSignIn] = useState(true);

  useEffect(() => {
    if (email) {
      emailRef.current.value = email;
    }
  }, [email]);
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then()
      .catch(({ message }) => {
        if (message) {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: message,
            confirmButtonText: 'Ok'
          });
        }
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then()
      .catch(({ message }) => {
        if (message) {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: message,
            confirmButtonText: 'Ok'
          });
        }
      });
  };

  const signUpClick = () => {
    setSignIn(false);
  };

  const signInClick = () => {
    setSignIn(true);
  };
  return (
    <div className="signupScreen">
      <form className="signup__form">
        <h1>Sign In</h1>
        <input type="email" ref={emailRef} placeholder="Email"></input>
        <input type="password" ref={passwordRef} placeholder="Password"></input>
        {signIn ? (
          <button type="submit" onClick={handleSignIn}>
            Sign In
          </button>
        ) : (
          <button type="submit" onClick={register}>
            Sign Up
          </button>
        )}
        <h4>
          {signIn ? (
            <>
              <span className="signupScreen__gray">New to Netflix? </span>
              <span
                role="button"
                tabIndex={0}
                onKeyDown={signUpClick}
                className="signupScreen__link"
                onClick={signUpClick}
              >
                Sign up now.
              </span>
            </>
          ) : (
            <>
              <span className="signupScreen__gray">Already Registered? </span>
              <span
                role="button"
                tabIndex={0}
                onKeyDown={signInClick}
                className="signupScreen__link"
                onClick={signInClick}
              >
                Sign in now.
              </span>
            </>
          )}
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
