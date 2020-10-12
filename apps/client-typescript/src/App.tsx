import React from 'react'

import GlobalStyles from 'GlobalStyles'
import Routes from 'Routes'
import { ThemeProvider } from 'Themes'

export const App = () => {

  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default App
