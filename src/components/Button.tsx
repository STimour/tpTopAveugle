import React, { useState } from 'react';
import App from '../App';

interface ButtonProps {
  onStart: () => void;
  onEnd: () => void;
}

const Button: React.FC<ButtonProps> = ({ onStart, onEnd }) => {
  const [started, setStarted] = useState(false);

  const handleClick = () => {
    if (!started) {
      onStart();
      setStarted(true);
    } else {
      onEnd();
      setStarted(false);
    }
  };

  return (
    <button className={started ? 'clickButton' : 'startButton'} onClick={handleClick}>
      {!started ? 'Commencer' : 'Arreter quand vous voulez !'}
    </button>
  );
};

export default Button;
