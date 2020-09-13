import React from 'react'

import GlobalStyles from 'GlobalStyles'
import Routes from 'Routes'
import Theme from 'Themes'

export const App = () => {
  return (
    <>
      <Theme>
        <GlobalStyles />
        <Routes />
      </Theme>
    </>
  )
}

export default App
