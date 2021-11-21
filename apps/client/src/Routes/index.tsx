import { FC, lazy } from "react"
import { BrowserRouter, Route, Routes as AppRoutes } from "react-router-dom"

import LazyRoute from "./LazyRoute"

const Home = lazy(() => import("../Pages/Home"))

type RouteName = typeof routeNames[number]
const routeNames = [
  "home",
] as const

export const RoutePaths: {[name in RouteName]: string} = {
  home: "/home",
}

const Routes: FC = () => {
  return (
    <BrowserRouter>
    <AppRoutes>
      <Route path="/" element={<LazyRoute><Home /></LazyRoute>}/>
    </AppRoutes>
    </BrowserRouter>
  )
}

export default Routes
