import React from "react";
import { Switch } from "react-router-dom";

import Route from "./route";

import Collection from "../components/pages/collection";
import Explore from "../components/pages/explore";
import Dashboard from "../components/pages/dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} isPrivate/>
      <Route path="/collection" component={Collection} isPrivate />
      <Route path="/explore" component={Explore} isPrivate />
      
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={Dashboard} />
    </Switch>
  );
}