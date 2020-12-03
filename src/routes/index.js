import React from "react";
import { Switch } from "react-router-dom";

import Route from "./route";

import Collection from "../pages/collection";
import Explore from "../pages/explore";
import Dashboard from "../pages/dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/collection" component={Collection} isPrivate />
      <Route path="/explore" component={Explore} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Dashboard} />
    </Switch>
  );
}