import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from '../components/HomeScreen';

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
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
