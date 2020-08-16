import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom"

import Loading from 'Components/Loading'

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
        <Route path={["/home"]}>{({ match }) => (
          <Suspense fallback={<Loading />}>
            <Home match={match} />
          </Suspense>
        )}</Route>

      </Switch>
    </Router>
  )
}

export default Routes
