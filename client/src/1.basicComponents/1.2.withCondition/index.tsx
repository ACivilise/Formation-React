import { MyProps } from './types';

const WithCondition = ({ text, isTitle }: MyProps) => {
  return (
    <div>
      <h1>WithCondition</h1>
      {isTitle ? <h2>{text}</h2> : <p>{text}</p>}
    </div>
  );
};

export default WithCondition;
