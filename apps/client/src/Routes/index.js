import React, { lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom"

import LazyRoute from 'Components/LazyRoute'

const Home = lazy(() => import('./Home'))

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
        <LazyRoute path={["/home", "/casa"]}>
          <Home />
        </LazyRoute>

      </Switch>
    </Router>
  )
}

export default Routes
