import { useParams } from 'react-router-dom';

const WithParamsUrl = () => {
  const { id } = useParams();
  return <h1>{id}</h1>;
};

// you can only have one default export
export default WithParamsUrl;
