import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import LoginScreen from '../components/screens/LoginScreen';

const DashboardRoute = () => (
  <div>
    <Switch>
      <Route exact path="auth/login" component={LoginScreen} />
      <Redirect to="auth/login" />
    </Switch>
  </div>
);

export default DashboardRoute;
