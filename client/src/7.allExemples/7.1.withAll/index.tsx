import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import useData from './hooks';
import LinksBar from './linksBar';
import { Box, TextField } from '@mui/material';
import { NameWithRoutesAdvanced } from './const';
import { MainBox } from './styles';

const WithAll = () => {
  const { routes, setCurrentId } = useData();
  return (
    <Box data-cy={NameWithRoutesAdvanced} sx={MainBox}>
      <BrowserRouter>
        <TextField variant="outlined" onChange={(event) => setCurrentId(event.target.value)} />
        <LinksBar routes={routes} />
        <Box>
          <Routes>
            {routes.map(({ key, path, element }) => (
              <Route key={key} path={path} element={element} />
            ))}
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
};

export default WithAll;
