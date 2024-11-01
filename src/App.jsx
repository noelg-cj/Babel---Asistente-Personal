import { useState } from 'react'
import Landing from './routes/landing'
import Login from './routes/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
    </>
  )
}

export default App
