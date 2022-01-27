import { MyProps } from './types';

const WithProps = (props: MyProps) => {
  return (
    <div>
      <h1>WithProps</h1>
      <h2>{props.text}</h2>
    </div>
  );
};

// you can only have one default export
export default WithProps;
