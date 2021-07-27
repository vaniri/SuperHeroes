import React from 'react';
import HeroContainer from '../src/components/HeroContainer.jsx'
import './App.css';

const App = () => {
  return (
    <div className="hero-page">
      <h1 className="title">CHOOSE YOUR HERO!</h1>
      <HeroContainer/>
    </div>
  );
}

export default App;
