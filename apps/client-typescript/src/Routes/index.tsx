import React, { FC, lazy, Suspense } from 'react'
import {
  BrowserRouter as BaseRouter,
  match,
  Route,
  Switch,
} from "react-router-dom"

import Loading from 'Components/Loading'

const Home = lazy(() => import('./Home'))

export type RouterProps<MatchParams = {}> = {
  history?: History,
  location?: Location,
  match: match<MatchParams> | null,
}
export type Router<T = {}> = FC<RouterProps<T>>

const Routes: FC = () => {
  return (
    <BaseRouter>

      {/* default route */}
      <Route exact path="/">
          {({ match }) => (
            <Suspense fallback={<Loading />}>
              <Home match={match}/>
            </Suspense> 
          )}
      </Route>

      <Switch>
        
        {/* home router */}
        <Route path={["/home"]}>
          {({ match }) => (
            <Suspense fallback={<Loading />}>
              <Home match={match}/>
            </Suspense> 
          )}
        </Route>
      </Switch>

    </BaseRouter>
  )
}

export default Routes
