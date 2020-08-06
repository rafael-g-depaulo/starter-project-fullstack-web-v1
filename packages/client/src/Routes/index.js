import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom"

import Home from './Home'

export const Routes = ({
  ...props
}) => {
  return (
    <Router basename="/">
      <Switch>
        <Home />
      </Switch>
    </Router>
  )
}

export default Routes
