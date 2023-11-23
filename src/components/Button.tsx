import React, { useState } from 'react';

interface ButtonProps {
  onStart: () => void;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onStart, onClick }) => {
  const [started, setStarted] = useState(false);

  const handleClick = () => {
    if (!started) {
      onStart();
      setStarted(true);
    } else {
      onClick();
    }
  };

  return <button onClick={handleClick}>{!started ? 'Commencer' : 'Cliquer quand vous voulez !'}</button>;
};

export default Button;
