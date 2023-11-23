import React, { useState } from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  const handleStart = () => {
    setStartTime(Date.now());
  };

  const handleButtonClick = () => {
    if (startTime !== null) {
      setEndTime(Date.now());
    }
  };

  const calculateError = () => {
    if (startTime !== null && endTime !== null) {
      // Générer une durée aléatoire entre 10 et 15 secondes
      const targetTime = Math.floor(Math.random() * 6) + 10; 
      const elapsedTime = Math.abs((endTime - startTime) / 1000);
      return Math.abs(targetTime - elapsedTime);
    }
    return null;
  };

  return (
    <div className="App">
      <Button onStart={handleStart} onClick={handleButtonClick} />
      {/* <Result error={calculateError()} /> */}
    </div>
  );
}

export default App;
