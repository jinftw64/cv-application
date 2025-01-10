import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import FormArea from './components/formArea'
import Resume from './components/resume.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Navbar />
      <FormArea />
      <Resume />
    </div>
  )
}

export default App
