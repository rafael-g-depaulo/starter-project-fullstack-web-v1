import { showRoutes } from "./FeatureFlags"
import GlobalStyles from "./GlobalStyles"
import Routes from "./Routes"

const App = () => {
  return (
    <>
      <GlobalStyles />
      { showRoutes && <Routes /> }
    </>
  )
}

export default App
