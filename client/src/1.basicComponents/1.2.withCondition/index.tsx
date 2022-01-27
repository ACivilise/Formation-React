import { MyProps } from './types';

const WithCondition = ({ text, isTitle }: MyProps) => {
  return isTitle ? <h1>{text}</h1> : <p>{text}</p>;
};

export default WithCondition;
