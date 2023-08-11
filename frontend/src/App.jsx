import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/newlogo.png'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Portfolio</h1>
      <Home/>
    </>
  )
}

export default App
