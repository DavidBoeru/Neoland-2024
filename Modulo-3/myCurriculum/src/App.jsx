import { useState } from 'react'
import './App.css'
import {Hero} from "./components/Hero/Hero"
import { Experience } from './components/Experience/Experience'
import { Education } from './components/Education/Education'
import { About } from './components/About/About'
import { More } from './components/More/More'



function App() {
  const [sowEducation, setSowEducation] = useState(true)

  return (
    <>
      <Hero />
      <About />
      <button id="botonEducation" onClick={() => setSowEducation(true)}>
      Education
      </button>
      <button id="botonExperience" onClick={() => setSowEducation(false)}>
      Experience
      </button>

      <div>
        {sowEducation ? (
          <Education  />
        ) : (
          <Experience  />
        )}
      </div>
    <More />
    </>
  )
}

export default App
