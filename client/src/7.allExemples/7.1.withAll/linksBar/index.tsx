import React from 'react';
import { Box, Button } from '@mui/material';

import { NameLinksBar } from './const';
import useData from './hooks';
import { LinksBarProps } from './types';

const LinksBar = ({ routes }: LinksBarProps) => {
  const { gotToLink } = useData();

  return (
    <Box>
      {routes.map(({ key, path, params, libelle }) => (
        <Button
          key={key.replace('/', '')}
          id={key.replace('/', '')}
          data-cy={key.replace('/', '')}
          onClick={() => (path ? gotToLink(path, params) : undefined)}
        >
          {libelle}
        </Button>
      ))}
    </Box>
  );
};

export default LinksBar;
