import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { NameWithParamsUrl } from './const';

const WithParamsUrl = () => {
  const { id } = useParams();
  return (
    <Typography data-cy={NameWithParamsUrl} variant="h1">
      {id}
    </Typography>
  );
};

export default WithParamsUrl;
