import { useState } from "react"

const App = () => {
  const [counter, setCounter] = useState(2)
  return (
    <div className="App">
      <p>test {counter}</p>
      <button onClick={() => setCounter(c => c+1)}>increment</button>
    </div>
  )
}

export default App
