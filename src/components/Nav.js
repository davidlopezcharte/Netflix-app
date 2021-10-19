import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import '../styles/Nav.css';

const Nav = () => {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 150) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  const history = useHistory();

  const handleAvatar = () => {
    history.push('/profile');
  };

  const handleLogo = () => {
    history.push('/');
  };

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <input
          onClick={handleLogo}
          type="image"
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix"
        />

        <input
          onClick={handleAvatar}
          type="image"
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
