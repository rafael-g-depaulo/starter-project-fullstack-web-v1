import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom"

import Home from './Home'

export const Routes = ({
  ...props
}) => {
  return (
    <Router basename="/">

      {/* exact alias for "/" */}
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>

      <Switch>

        {/* home */}
        <Route path={["/home"]} component={Home}/>
        
      </Switch>
    </Router>
  )
}

export default Routes
