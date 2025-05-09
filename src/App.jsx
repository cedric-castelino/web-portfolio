import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import './App.css'

function App() {

  return (
    <Router>
      <div className="w-full min-h-screen bg-base-100">
        <div className="navbar bg-base-100 shadow-sm pl-4 pt-4 pb-4">
          <div className="flex-1">
            <h1 className="text-4xl font-bold">Web Portfolio</h1>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App