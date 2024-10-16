import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About.jsx';
import Qualifications from './components/Qualifications';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Your custom CSS file

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Qualifications />
      <Projects />
    </div>
  );
};

export default App;
