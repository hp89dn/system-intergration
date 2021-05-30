import React from "react";
import { Route, Switch } from "react-router";
import { DashBoard, LoginScreen } from "../../screens";

export const Layout = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginScreen} />
      <Route path="/dashboard" exact component={DashBoard} />
      <Route path="/" exact component={LoginScreen} />
      <Route path="**" exact component={LoginScreen} />
    </Switch>
  );
};
