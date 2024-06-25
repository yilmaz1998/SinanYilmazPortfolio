import React from "react";
import { Routes, Route} from "react-router-dom"


import Sidebar from "./components/Sidebar"
import Welcome from "./components/Welcome"
import About from "./components/About"
import Contact from './components/Contact'
import Project from './components/Project'
import Skills from './components/Skills'


function App() {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App

