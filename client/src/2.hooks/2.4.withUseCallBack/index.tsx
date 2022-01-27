import React from 'react';
import { flexColumn, flexRow } from 'styles';

import { useCallback, useState } from 'react';

const WithUseCallBack = () => {
  const tilte = 'titre';
  const [color, setColor] = useState('#fff');

  const changeColor = useCallback(() => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${randomColor}`);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: color,
        ...flexColumn,
      }}
    >
      <h1> Composant avec un hook de callback (useCallback)</h1>
      <div
        style={{
          width: '100%',
          ...flexRow,
        }}
      >
        <h1>{color}</h1>
      </div>
      <div
        style={{
          width: '100%',
          ...flexRow,
        }}
      >
        <button onClick={() => changeColor()}>{`changer la couleur ${color}`}</button>
        <h1>{tilte}</h1>
      </div>
    </div>
  );
};

export default WithUseCallBack;
