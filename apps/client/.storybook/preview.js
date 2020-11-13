import React from "react"

import { ThemeProvider } from "../src/Themes"
import GlobalStyles from "../src/GlobalStyles"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const injectGlobalStylesAndTheme = Story => (
  <>
    <ThemeProvider>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  </>
)

export const decorators = [
  injectGlobalStylesAndTheme,
]
