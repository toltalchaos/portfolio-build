import React from 'react';
import {Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      {/* header+navdeck */}
      <Switch>
        <Route path="/">
          {/* homepage */}
        </Route>
        <Route path="/git">
          {/* githubpage */}
        </Route>
        <Route path="/links">
          {/* links */}
        </Route>
        <Route path="/about">
          {/* about/hobbies page */}
        </Route>
        <Route path="/contact">
          {/* contact page */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
