// import { useState } from 'react'
import General from './components/General'
import Education from './components/Education'
import Practical from './components/Practical'

function App() {
  return (
    <>
      <h1>CV Generator</h1>
      <h2>General Information</h2>
      <General />
      <br></br>
      <h2>Educational Experience</h2>
      <Education />
      <br></br>
      <h2>Practical Experience</h2>
      <Practical />
      <br></br>
    </>
  )
}

export default App;

