import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";

import Mainbar from "./components/Mainbar";
import Landing from "./components/Landing";
import theme from "./components/Theme";
import EventPage from "./components/EventPage";

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Mainbar />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/events">
              <EventPage />
            </Route>
            <Route path="/joueurs">
              <h1>HELLO</h1>
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </>
  );
}

export default App;
