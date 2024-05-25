import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import PopularCards from './components/layout/PopularCards';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Hero/>
      <PopularCards/>
    </div>
  );
}

export default App;
