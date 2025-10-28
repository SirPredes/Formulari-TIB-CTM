import { useState } from 'react'
import './App.css'
import {ClaimForm} from './formulari/ClaimsForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClaimForm />
    </>
  )
}

export default App
