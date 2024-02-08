import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Members from './Pages/Members';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<Gallery />} />
          <Route path="/contact" element={<Members />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
