import React, { lazy, Suspense } from 'react'
import { Route, Switch } from "react-router-dom"

import Loading from 'Components/Loading'

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
      <Route exact path={`${path}`}>
        {() => (
          <Suspense fallback={<Loading />}>
            <ListAll />
          </Suspense>
        )}
      </Route>

      {/* page to show a single thing */}
      <Route path={`${path}/:id`}>
        {({ match }) => (
          <Suspense fallback={<Loading />}>
            <Show thing_id={match.params.id} />
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}

export default Home
