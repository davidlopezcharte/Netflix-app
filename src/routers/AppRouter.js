import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import HomeScreen from '../components/screens/HomeScreen';
import LoginScreen from '../components/screens/LoginScreen';
import ProfileScreen from '../components/screens/ProfileScreen';
import { login, logout, selectUser } from '../features/userSlice';
import { auth } from '../library/firebase';
// import AuthRoute from './AuthRoute';
// import { PrivateRoute } from './PrivateRoute';
// import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );
        setIsLoggedIn(true);
      } else {
        dispatch(logout());
        setIsLoggedIn(false);
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile" component={ProfileScreen} />
            {user.plan ? (
              <Route exact path="/" component={HomeScreen} />
            ) : (
              <Redirect to="/profile" />
            )}
          </Switch>
        )}
      </Router>
    </div>
  );
};

export default AppRouter;

/* <Router>
      <div>
        <Switch>
          <PublicRoute path="/auth/login" component={LoginScreen} isLoggedIn={isLoggedIn} />
          <PrivateRoute path="/" component={AuthRoute} isLoggedIn={isLoggedIn} />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router> */
