import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationItem from "./NavigationItem";
<Router>
  <div>
    <NavigationItem />
    <Switch>
      <Route to="/home" component={HomePage} exact />
      <Route to="/profile" component={Profile} exact />
      <Route to="/logout" component={LogOut} exact />
    </Switch>
  </div>
</Router>;

export default home1;
