import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../library/firebase';
import '../../styles/ProfileScreen.css';
import Nav from '../Nav';

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  console.log(user);

  const handleSignout = () => {
    auth.signOut();
  };
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <h4>Renewal date: 04/03/2021</h4>
              <div className="profileScreen__subscribe">
                <h4>Netflix Stardard</h4>
                <button type="button">Subscribe</button>
              </div>
              <button onClick={handleSignout} className="profileScreen__signOut" type="button">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
