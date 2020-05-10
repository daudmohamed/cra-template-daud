import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import CounterPage from "./pages/Counter/CounterPage";

const App = () => {
  return (
      <Router>
        <Switch>
          <Route path="/counter">
            <CounterPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
  );
};

export default App;
