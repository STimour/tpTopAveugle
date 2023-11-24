import React, { useState } from 'react';
import Timer from './components/Timer'
import Button from './components/Button' 
import Result from './components/Display'

import './App.css';

function App() {
  const [startTime, setStartTime] = useState<Date | null>(null);
  
  const [endTime, setEndTime] = useState<Date>(new Date());

  const [targerTime, setTargetTime] = useState(Math.floor(Math.random() * 16) + 5)

  const handleStart = () => {
    setStartTime(new Date());
  };

  const handleButtonClick = () => {
      setEndTime(new Date());
  };

  const timeToWin = Number(startTime) + targerTime

  return (
    <div className="App">
      <Timer numberAleat={targerTime}/>
      <h1>{startTime !== undefined ? startTime?.toLocaleTimeString() : 0}</h1>
      <h1>{endTime.toLocaleTimeString()}</h1>
      <Result numberAleat={targerTime} timeToWin={timeToWin}/>
      <Button onStart={()=> handleStart()} onEnd={() => handleButtonClick}/>
    </div>
  );
}

export default App;