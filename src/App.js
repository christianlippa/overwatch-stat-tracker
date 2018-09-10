import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserEntry from "./Components/UserEntry/UserEntry"
import ListView from "./Components/ListView/ListView"
import ListItemDetail from "./Components/ListItemDetail/ListItemDetail"

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={UserEntry} />
      <Route path="/data" component={ListView} />
      <Route path="/hero" component={ListItemDetail} />
    </div>
  </Router>
);

export default Routes;