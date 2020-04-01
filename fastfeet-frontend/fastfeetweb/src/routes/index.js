import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import SignIn from "../pages/SignIn";

import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import NewMeet from "../pages/NewMeet";
import Modal from "../components/SimpleDialog";
import teste from "../pages/Dashboard/tempDialog";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/newMeet" component={NewMeet} isPrivate />
      <Route path="/modal" component={Modal} isPrivate />
      <Route path="/teste" component={teste} isPrivate />
    </Switch>
  );
}
