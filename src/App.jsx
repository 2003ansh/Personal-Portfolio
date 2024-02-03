import React from 'react'
import './App.css';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Project from './components/Project.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer.jsx';
import Design from '../Design.jsx';
import 'animate.css';
export default function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
    <div className="App" style={{position:"relative"}}>
    <div className="particles">
      <Design></Design>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path='/projects' element={<Project></Project>}></Route>
    </Routes>
    
    </div>
    <Footer></Footer>
    </BrowserRouter>
    
  )
}
