import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import HomeScreen from '../components/screens/HomeScreen';
import ProfileScreen from '../components/screens/ProfileScreen';

const AuthRoute = () => (
  <div>
    <Switch>
      <Route exact path="/profile" component={ProfileScreen} />
      <Route exact path="/homescreen" component={HomeScreen} />

      <Redirect to="/profile" />
    </Switch>
  </div>
);

export default AuthRoute;
