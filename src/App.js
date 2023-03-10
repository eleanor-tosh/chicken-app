import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Landing from './pages/Landing.jsx'
import Inputs from './pages/Inputs.jsx'
import Result from './pages/Result.jsx'
import Prices from './pages/Prices.jsx'

function App() {
  const [inputResult, setInputData] = useState({
    hens: '',
    eggs: '',
    food1freq: '',
    food1size: '',
    food1cost: '',
    food2freq: '',
    food2size: '',
    food2cost: '',
    food3freq: '',
    food3size: '',
    food3cost: '',
    food4freq: '',
    food4size: '',
    food4cost: '',
    food5freq: '',
    food5size: '',
    food5cost: '',
    bed1freq: '',
    bed1size: '',
    bed1cost: '',
    bed2freq: '',
    bed2size: '',
    bed2cost: '',
    bed3freq: '',
    bed3size: '',
    bed3cost: '',
    other1: '',
    other1cost: '',
    other2: '',
    other2cost: '',
  })

  function handleData(inputData) {
    setInputData(inputData)
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/inputs" element={<Inputs changeInput={handleData} />} />
          <Route path="/result" element={<Result inputData={inputResult} />} />
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
