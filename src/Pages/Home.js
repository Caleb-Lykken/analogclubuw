import React from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import About from '../Components/About';
import '../App.css';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Header />
      <About />
    </div>
  ); 
}

export default Home;