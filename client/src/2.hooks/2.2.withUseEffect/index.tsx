import React from 'react';
import { useEffect, useState } from 'react';

import { flexColumn, flexRow } from '../../styles';

const WithUseEffect = () => {
  const tilte = 'titre';

  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('#fff');

  useEffect(() => {
    // Si counter est pair, on change de couleur
    if (counter % 2 === 0) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      setColor(`#${randomColor}`);
    }
  }, [counter]);

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: color,
        ...flexColumn,
      }}
    >
      <h1>Composant avec un hook d&apos;effet (useEffect)</h1>
      <div
        style={{
          width: '100%',
          ...flexRow,
        }}
      >
        <h1>{color}</h1>
        <h2>{counter}</h2>
      </div>
      <div
        style={{
          width: '100%',
          ...flexRow,
        }}
      >
        <button onClick={() => setCounter((prev) => prev + 1)}>{`changer la couleur ${color}`}</button>
        <h1>{tilte}</h1>
      </div>
    </div>
  );
};

export default WithUseEffect;
