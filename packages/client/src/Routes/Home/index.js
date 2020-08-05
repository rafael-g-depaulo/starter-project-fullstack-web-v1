import React from 'react'
import { Route } from "react-router-dom"

import BaseRoute from 'Components/BaseRoute'

import Show from './Show'
import ListAll from './ListAll'

export const Home = ({
  ...props
}) => {
  return (
    <BaseRoute path="/home" aliases={["/"]}>
      {/* sub route */}
      <Route path="/home/:thing_id">
        <Show />
      </Route>

      {/* base sub route */}
      <Route>
        <ListAll />
      </Route>
    </BaseRoute>
  )
}

export default Home
