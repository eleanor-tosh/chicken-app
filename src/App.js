import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Inputs from './pages/Inputs.jsx'
import Result from './pages/Result.jsx'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
