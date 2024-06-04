import { useState } from 'react'
import './App.css'
import { Title } from './components/Title/Title'
import { SubTitle } from './components/SubTitle/SubTitle'
import { Image } from './components/Image/Image'
import { Paragraph } from './components/Paragraph/Paragraph'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title />
      <SubTitle />
      <Image />
      <Paragraph />
    </>
  )
}

export default App
