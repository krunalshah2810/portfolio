import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {HashLink as Link} from 'react-router-hash-link';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Home/>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experiences">
        <Experience />
      </div>
    </div>
  );
}
  

export default App;
