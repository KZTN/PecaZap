import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
