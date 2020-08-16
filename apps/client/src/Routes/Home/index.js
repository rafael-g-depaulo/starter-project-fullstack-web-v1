import React from 'react'
import { Route, Switch } from "react-router-dom"

import Show from './Show'
import ListAll from './ListAll'

export const Home = ({
  match,
  ...props
}) => {
  const { path } = match
  return (
    <Switch>
      
      {/* base route */}
      <Route exact path={`${path}`}>
        {() => (
          <ListAll />
        )}
      </Route>

      {/* page to show a single thing */}
      <Route path={`${path}/:id`}>
        {({ match }) => (
          <Show thing_id={match.params.id}/>
        )}
      </Route>
    </Switch>
  )
}

export default Home
