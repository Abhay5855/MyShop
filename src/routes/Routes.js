import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "../components/ecommerse/container";
import Signup from "../components/ecommerse/signup/Signup"


const Routes = () => {
  return (
    <Router>
      <Route exact path='/' component={Signup} />
      <Route exact path='/landing' component={Container} />
      
    </Router>
  );
};

export default Routes;
