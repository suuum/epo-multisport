import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.css?v=1.3.0";
import LandingPage from "./views/LandingPage/LandingPage";
import NewsPage from "./views/NewsPage/NewsPage";
import HealthCoachingPage from "./views/HealthCoachingPage/HealthCoachingPage";
import BikeServicePage from "./views/BikeServicePage/BikeServicePage";
import StationaryTrainingPage from "./views/StationaryTrainingPage/StationaryTrainingPage";
import ContactPage from "./views/ContactPage/ContactPage";
import ShopPage from "./views/ShopPage/ShopPage";
import Components from "views/Components/Components.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/aktualnosci" component={NewsPage}/>
      <Route path="/opieka-trenerska" component={HealthCoachingPage}/>
      <Route path="/serwis-rowerowy" component={BikeServicePage}/>
      <Route path="/trening-stacjonarny" component={StationaryTrainingPage}/>      
      <Route path="/kontakt" component={ContactPage}/>      
      <Route path="/sklep" component={ShopPage}/>     
      <Route path="/components" component={Components}/>
      <Route path="/profile" component={ProfilePage}/>         
      <Route path="/" component={LandingPage}/>        
    </Switch>
  </Router>,
  document.getElementById("root")
);
