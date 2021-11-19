import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import '../styles/Nav.css';
import netflixLogo from '../media/netflix.png';
import profileImg from '../media/profile.png';

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
          src={netflixLogo}
          alt="Netflix"
        />

        <input
          onClick={handleAvatar}
          type="image"
          className="nav__avatar"
          src={profileImg}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
