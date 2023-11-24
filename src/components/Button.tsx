import React, { useState } from 'react';

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
      setStarted(false)
    }
  };

  return <button onClick={handleClick}>{!started ? 'Commencer' : 'Cliquer quand vous voulez !'}</button>;
};

export default Button;
