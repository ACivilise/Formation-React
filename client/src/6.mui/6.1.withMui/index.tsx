import React from 'react';
import useData from './hooks';

import UserInfoView from './userInfoView';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from '6.mui/theme';
import { Button, Box, List, Typography } from '@mui/material';
import { MainBox } from './styles';

const WithMui = () => {
  const { users } = useData();

  return (
    <ThemeProvider theme={muiTheme}>
      <Box data-info="parent" sx={{ display: 'flex', flexDirection: 'row' }}>
        <List data-info="list" sx={MainBox}>
          {users.map(({ info: { firstName, lastName } }, index) => (
            <UserInfoView key={index} firstName={firstName} lastName={lastName} />
          ))}
        </List>
        <Box data-info="others" sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography variant="h1">test</Typography>
          <Typography>test 2 </Typography>
          <Button></Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default WithMui;
