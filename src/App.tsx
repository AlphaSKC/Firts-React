import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/layout/Navbar';
import Header from './components/layout/Header';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Header/>
    </div>
  );
}

export default App;
