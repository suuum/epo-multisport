import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.css?v=1.3.0";
import LandingPage from "./views/LandingPage/LandingPage";
import NewsPage from "./views/NewsPage/NewsPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/aktualnosci" component={NewsPage}/>
      <Route path="/" component={LandingPage}/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
