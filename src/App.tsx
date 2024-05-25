import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import PopularCards from './components/layout/PopularCards';
import Releases from './components/layout/Releases';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Hero/>
      <PopularCards/>
      <Releases/>
    </div>
  );
}

export default App;
