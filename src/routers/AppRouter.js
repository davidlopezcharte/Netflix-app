import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from '../components/screens/HomeScreen';
import LoginScreen from '../components/screens/LoginScreen';
import { login, logout, selectUser } from '../features/userSlice';
import { auth } from '../library/firebase';

const AppRouter = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          }),
        );
      } else {
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, []);
  console.log(user);
  return (
    <div>
      <Router>
        <Switch>
          {!user ? (
            <LoginScreen />
          ) : (
            // <Route path="/login" component={LoginScreen} />
            <Route exact path="/">
              <HomeScreen />
            </Route>
          )}
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
