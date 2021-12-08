import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './components/header';
import NavDeck from './components/navDeck';
import LandingPage from './pages/landingPage/landingPage';
import styled from 'styled-components';
import { Colors } from './components/constValues';
import AboutPage from './pages/aboutPage/aboutPage';
import ContactPage from './pages/Contact/contact';
import LinksPage from './pages/links/linksPage';
import WorkHistory from './pages/workHistory/workHistory';

const APPSTYLE = styled.div`
background-color: ${Colors.slateGrey};
max-width: 1080px;
margin: 0 auto;
overflow-x: hidden;
`

function App() {
  return (
    <APPSTYLE>
    <Router>
      <Header/>
      <NavDeck/>
      <Switch>
        <Route exact path="/">
            <LandingPage/>  
        </Route>
        <Route exact path="/links">
          <LinksPage/>
        </Route>
        <Route exact path="/workhistory">
          <WorkHistory/>
        </Route>
        <Route exact path="/about">
          <AboutPage/>
        </Route>
        <Route exact path="/contact">
          <ContactPage/>
        </Route>
      </Switch>
    </Router>
    </APPSTYLE>
  );
}

export default App;
