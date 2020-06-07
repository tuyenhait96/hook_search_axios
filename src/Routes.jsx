import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import App from "./App";
import NavContainer from "./Components/NavContainer";
import UserDetail from "./Components/UserDetail";

function Routes(props) {
  return (
    <BrowserRouter>
      <NavContainer />
      <Switch>
        <Route exact path="/" render={(props) => <App {...props} />} />
        <Route
          exact
          path="/users/:userId"
          render={(props) => <UserDetail {...props} />}
        />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
