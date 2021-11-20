import { useState } from "react"

import GlobalStyles from "./GlobalStyles"

const App = () => {
  const [counter, setCounter] = useState(2)
  return (
    <>
      <div>
        <p>test {counter}</p>
        <button onClick={() => setCounter(c => c+1)}>increment</button>
      </div>
      <GlobalStyles />
    </>
  )
}

export default App
