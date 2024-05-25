import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import Populares from './components/layout/Populares';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Hero/>
      <Populares/>
    </div>
  );
}

export default App;
