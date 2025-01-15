import { useState } from 'react'
import exampleData from './exampleData.js'
import './App.css'
import Navbar from './components/navbar'
import FormArea from './components/formArea'
import Resume from './components/resume.jsx'

function App() {
  const [personalDetails, setPersonalDetails] = useState(exampleData.personalDetails);
  console.log(personalDetails);

  return (
    <div className="container">
      <Navbar />
      <FormArea
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <Resume />
    </div>
  )
}

export default App
