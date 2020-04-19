import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { StoreProvider } from "../context/Store";
import GlobalStyles from "../theme/globals";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/connect" />} />
        <Route exact path="/connect" component={Login} />
        <StoreProvider>
          <Route exact path="/home" component={Home} />
        </StoreProvider>
      </Switch>
      <GlobalStyles />
    </Router>
  );
}

export default App;
