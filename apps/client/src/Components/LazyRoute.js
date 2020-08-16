import React, { Children, cloneElement, Suspense } from 'react'
import { Route } from 'react-router-dom'
import Loading from './Loading'

export const LazyRoute = ({
  children,
  fallback,
  path,
  ...props
}) => {
  return (
    <Route path={path} {...props}>
      {({ match }) => (
        <Suspense fallback={fallback ?? <Loading />}>
          {/* basically, add the match property to all children */}
          { Children
            .map(children,
              child => cloneElement(child, { match })
            )
          }
        </Suspense>
      )}
    </Route>
  )
}

export default LazyRoute
