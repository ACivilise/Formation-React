import { ChildProps } from './types';

const Child = ({ color, changeColor }: ChildProps) => {
  return <button onClick={changeColor}>{`changer la couleur ${color}`}</button>;
};

export default Child;
