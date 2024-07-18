import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [rotation, setRotation] = useState(0);
  const [angularSpeed, setAngularSpeed] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setAngularSpeed(1); // Positive angular speed
      } else if (event.key === 'ArrowRight') {
        setAngularSpeed(-1); // Negative angular speed
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        setAngularSpeed(0); // Stop rotation
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + angularSpeed);
    }, 16); // Approximately 60 frames per second

    return () => clearInterval(interval);
  }, [angularSpeed]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cassoulet</h1>
        {/* <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ transform: `rotate(${rotation}deg)` }}
        /> */}
      </header>
    </div>
  );
}

export default App;