import { useState } from 'react'
import './App.css'
import { Saludo } from './components/Saludo/Saludo'
import { Array } from './components'
import { Button } from './components/button/button'



function App() {
  const [count, setCount] = useState(false)

  return (
    <>
      <div>
     < Saludo  />
     < Array />
     < Button funcionSeteadoraEstado={setCount} valorActual={count} />
      </div>
     
    </>
  )
}

export default App
