import { MyProps } from './types';

const WithProps = (props: MyProps) => {
  return <h1>{props.text}</h1>;
};

// you can only have one default export
export default WithProps;
