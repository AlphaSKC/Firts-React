import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/layout/Navbar';
import Hero from './components/layout/Hero';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Hero/>
    </div>
  );
}

export default App;
