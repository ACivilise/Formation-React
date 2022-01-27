import React from 'react';

import { ListItem, ListItemText } from '@mui/material';
import { UserInfos } from '5.axios/models/types';

const UserInfoView = ({ firstName, lastName }: UserInfos) => {
  return (
    <ListItem data-info="test">
      <ListItemText primary={firstName} secondary={lastName} />
    </ListItem>
  );
};

export default UserInfoView;
