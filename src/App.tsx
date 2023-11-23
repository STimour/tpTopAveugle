import React, { useState } from 'react';
import Timer from './components/Timer';
import Button from './components/Button';
import Result from './components/Result';
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
      const targetTime = 12; // Durée visée en secondes
      const elapsedTime = Math.abs((endTime - startTime) / 1000);
      return Math.abs(targetTime - elapsedTime);
    }
    return null;
  };

  return (
    <div className="App">
      <Timer duration={12} onTimeUp={() => setEndTime(Date.now())} />
      <Button onStart={handleStart} onClick={handleButtonClick} />
      <Result error={calculateError()} />
    </div>
  );
}

export default App;
