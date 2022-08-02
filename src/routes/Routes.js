import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from '../components/ecommerse/container'
import Signup from '../components/ecommerse/signup/Signup'
import Navbar from '../components/ecommerse/navbar/Navbar'
import Cart from '../components/ecommerse/cart'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />

        <div>
          <Navbar />

          <Route exact path="/landing" component={Container} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </Switch>
    </Router>
  )
}

export default Routes
