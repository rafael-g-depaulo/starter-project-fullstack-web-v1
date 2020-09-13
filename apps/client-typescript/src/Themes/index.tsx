import React, { FC } from "react"
import { ThemeProvider } from "styled-components"
import defaultTheme from "./default"

export interface Theme {
  fontSize: string,
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export const Theme: FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{ children }</ThemeProvider>
)

export default Theme