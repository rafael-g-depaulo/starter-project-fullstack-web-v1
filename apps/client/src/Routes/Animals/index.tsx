import Loading from "Components/Loading"
import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import { Router } from "Routes"

const ListAllAnimals = lazy(() => import('./ListAllAnimals'))

export const Animals: Router = ({
  match,
}) => {
  const { path = "" } = match ?? {}

  return (
    <Switch>

      {/* lista de todos os animais */}
      <Route path={path}>
        {() => (
          <Suspense fallback={<Loading />}>
            <ListAllAnimals />
          </Suspense>
        )}
      </Route>
    </Switch>
  )
}

export default Animals
