import React, { useState } from 'react';
import Timer from './components/Timer'
import Button from './components/Button' 
import Result from './components/Display'

import './App.css';

function App() {
  const [startTime, setStartTime] = useState<number | null>(null);
  
  const [endTime, setEndTime] = useState<number | null>(null);

  const [targerTime, setTargetTime] = useState(Math.floor(Math.random() * 16) + 5)

  const [timeToWin, setTimeToWin] = useState<number | null>(null)

  const handleStart = () => {
    const startTime = Date.now()
    setStartTime(startTime);
    setTimeToWin(startTime + targerTime * 1000)
  };

  const handleButtonClick = () => {
      setEndTime(Date.now());
  };

  

  return (
    <div className="App">
      <Timer numberAleat={targerTime}/>
      <Result numberAleat={targerTime} timeToWin={timeToWin} end={endTime}/>
      <Button onStart={()=> handleStart()} onEnd={() => handleButtonClick()}/>
    </div>
  );
}

export default App;