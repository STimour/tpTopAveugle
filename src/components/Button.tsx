import React, { useState } from 'react';
import App from '../App';

interface ButtonProps {
  onStart: () => void;
  onEnd: () => void;
}

const Button: React.FC<ButtonProps> = ({ onStart, onEnd }) => {
  const [started, setStarted] = useState(false);

  const handleStartClick = () => {
    onStart();
    setStarted(true);
  };

  const handleEndClick = () => {
    onEnd();
    setStarted(false);
  };

  return (
    <div>
      {!started ? (
        <button onClick={handleStartClick}>Start</button>
      ) : (
        <button onClick={handleEndClick}>End</button>
      )}
    </div>
  );
};

export default Button;

