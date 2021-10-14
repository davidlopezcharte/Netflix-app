import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from '../components/screens/HomeScreen';
import LoginScreen from '../components/screens/LoginScreen';

const AppRouter = () => {
  const hola = 1;
  console.log(hola);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/login" component={LoginScreen} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
