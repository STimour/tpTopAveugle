import React, { useState } from 'react';
import Timer from './components/Timer'
import Button from './components/Button' 
import Result from './Componant/Result'


import './App.css';

function App() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState<Date>(new Date());

  const targerTime = Math.floor(Math.random() * 6) + 10; 
  
  const handleStart = () => {
    const stringStartTime = ((new Date).getTime()).toString()
    setStartTime(stringStartTime);
  };

  const handleButtonClick = () => {
    if (startTime !== null) {
      setEndTime(new Date());
    }
  };

  const timeToWin = Number(startTime) + targerTime


  return (
    <div className="App">
      <Timer numberAleat={targerTime}/>
      <Result winNumber={timeToWin}/>
      <Button onStart={()=> handleStart()} onClick={() => handleButtonClick}/>
      <h1>{startTime}</h1>
    </div>
  );
}

export default App;
