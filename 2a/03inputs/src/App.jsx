import { useState } from 'react'
import './App.css'
import Demo from './components/Demo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Inputs</h1>
     <Demo />
    </>
  )
}

export default App
