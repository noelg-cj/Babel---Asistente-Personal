import { useState } from 'react'
import Landing from './routes/landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing />
    </>
  )
}

export default App
