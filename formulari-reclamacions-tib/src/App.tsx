import { useState } from 'react'
import './App.css'
import {ClaimsForm} from './formulari/ClaimsForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClaimsForm />
    </>
  )
}

export default App
