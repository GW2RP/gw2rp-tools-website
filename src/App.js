import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Mainbar from "./components/Mainbar";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <Mainbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/joueurs">
            <h1>HELLO</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
