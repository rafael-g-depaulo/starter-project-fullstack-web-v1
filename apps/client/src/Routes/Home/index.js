import React, { lazy } from 'react'
import { Switch } from "react-router-dom"

import LazyRoute from 'Components/LazyRoute'

const Show = lazy(() => import("./Show"))
const ListAll = lazy(() => import("./ListAll"))

export const Home = ({
  match,
  ...props
}) => {
  const { path } = match
  return (
    <Switch>
      
      {/* base route */}
      <LazyRoute exact path={`${path}`}>
        <ListAll />
      </LazyRoute>

      {/* page to show a single thing */}
      <LazyRoute path={`${path}/:id`}>
        <Show thing_id={match.params.id} />
      </LazyRoute>
      
    </Switch>
  )
}

export default Home
