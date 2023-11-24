import React, { useState } from 'react';
import Timer from './components/Timer'
import Button from './components/Button' 
import Result from './components/Display'

import './App.css';

function App() {
  const [startTime, setStartTime] = useState<Date | null>(null);
  
  const [endTime, setEndTime] = useState<Date>(new Date());

  const [targerTime, setTargetTime] = useState(Math.floor(Math.random() * 16) + 5)

  const [timeToWin, setTimeToWin] = useState('')

  const handleStart = () => {
    setStartTime(new Date());
    setTimeToWin(new Date(Number(startTime) + targerTime * 1000).toLocaleTimeString())
  };

  const handleButtonClick = () => {
      setEndTime(new Date());
  };

  

  return (
    <div className="App">
      <Timer numberAleat={targerTime}/>
      <h1>Début à : {startTime !== undefined ? startTime?.toLocaleTimeString() : 0}</h1>
      <Result numberAleat={targerTime} timeToWin={timeToWin}/>
      <Button onStart={()=> handleStart()} onEnd={() => handleButtonClick}/>
    </div>
  );
}

export default App;