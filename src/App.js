import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './components/header';
import NavDeck from './components/navDeck';
import LandingPage from './pages/landingPage/landingPage';


function App() {
  return (
    <Router>
      <Header/>
      <NavDeck/>
      <Switch>
        <Route path="/">
          <LandingPage/>
        </Route>
        <Route path="/git">
          
        </Route>
        <Route path="/links">
          
        </Route>
        <Route path="/about">
          
        </Route>
        <Route path="/contact">
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
