import React from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const WithParamsUrl = () => {
  const { id } = useParams();
  return <Typography variant="h1">{id}</Typography>;
};

export default WithParamsUrl;
