import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"

export const BaseRoute = ({
  path,
  aliases = [],
  children,
  ...props
}) => {
  return (
    // add route and aliases
    <Route path={[path, ...aliases]} {...props}>
      {/* add a router to use relative links */}
      <Router>
        <Switch>
          { children }
        </Switch>
      </Router>
    </Route>
  )
}

export default BaseRoute
