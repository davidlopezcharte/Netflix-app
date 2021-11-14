import React, { useRef, useState } from 'react';
import '../../styles/LoginScreen.css';
import SignupScreen from './SignupScreen';

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  const emailRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    setSignIn(true);
  };
  console.log(signIn);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <button onClick={handleClick} className="loginScreen__button" type="submit">
          Sign In
        </button>

        <div className="loginScreen__gradient"></div>
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen email={emailRef.current?.value} />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to Watch? Enter your email to create or restart your membership</h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email addres" ref={emailRef} />
                <button onClick={handleClick} className="loginScreen__getStarted" type="submit">
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
