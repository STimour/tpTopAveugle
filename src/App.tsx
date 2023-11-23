import React, { useState } from 'react';
import Timer from './components/Timer'
import Button from './components/Button' 

import './App.css';

function App() {
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());

  const targerTime = Math.floor(Math.random() * 6) + 10; 
  
  const handleStart = () => {
    setStartTime(new Date());
  };

  const handleButtonClick = () => {
    if (startTime !== null) {
      setEndTime(new Date());
    }
  };

  const timeWithStartTime = startTime.getTime()

  return (
    <div className="App">
      <Timer numberAleat={targerTime}  timeToWin={timeWithStartTime} />
    </div>
  );
}

export default App;
