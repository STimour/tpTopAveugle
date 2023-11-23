import React from 'react';

interface ResultProps {
  error: number | null;
}

const Result: React.FC<ResultProps> = ({ error }) => {
  const getPerformance = () => {
    if (error === null) return 'En attente';
    if (error === 0) return 'Excellente';
    if (error <= 2) return 'Bonne';
    if (error <= 5) return 'Moyenne';
    return 'Mauvaise';
  };

  return <div>Résultat: {getPerformance()}</div>;
};

export default Result;
