import { useState, useCallback } from 'react';
import { UseDataProps } from './types';

const useData = (): UseDataProps => {
  const tilte = 'titre';
  const [color, setColor] = useState('#fff');

  const changeColor = useCallback(() => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${randomColor}`);
  }, []);

  return {
    tilte,
    color,
    changeColor,
  };
};

export default useData;
