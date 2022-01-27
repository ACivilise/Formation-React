import React from 'react';
import { UserInfos } from '5.axios/models/types';

import { flexRow } from 'styles';

type withIndex = {
  index: number;
};

const UserInfoView = ({ firstName, lastName, index }: UserInfos & withIndex) => {
  return (
    <div
      style={{
        width: '100%',
        ...flexRow,
      }}
    >
      <h1 data-cy={`test-${index}`}>{firstName}</h1>
      <h1>{lastName}</h1>
    </div>
  );
};

export default UserInfoView;
