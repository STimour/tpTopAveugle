import React, { useState } from 'react';
import Timer from './components/Timer'
import Button from './components/Button' 
import Result from './Componant/Result'




import './App.css';

function App() {
  const [startTime, setStartTime] = useState<Date | null>(null);
  
  const [endTime, setEndTime] = useState<Date>(new Date());




  const targerTime = Math.floor(Math.random() * 6) + 10; 
  
  const handleStart = () => {
    setStartTime(new Date());
  };

  const handleButtonClick = () => {
      setEndTime(new Date());
      setStartTime(null)
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