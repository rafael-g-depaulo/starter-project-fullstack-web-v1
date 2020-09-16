import Loading from "Components/Loading"
import React, { Suspense } from "react"
import { Route, RouteComponentProps, Switch } from "react-router-dom"

import { Router } from "Routes"

import HomePage from "./HomePage"
import ListItems from "./ListItems"

export const Home: Router = ({
  match,
}) => {
  const { path } = match ?? {}
  
  return (
    <Switch>
      <Route exact path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        )}
      </Route>

      <Route path={`${path}/:id`}>
        {({ match }: RouteComponentProps<{ id: string }>) => (
          <Suspense fallback={<Loading />}>
            <ListItems id={match.params.id}/>
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}

export default Home
