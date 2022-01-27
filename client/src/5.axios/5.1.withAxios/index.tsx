import React from 'react';
import useData from './hooks';
import UsersView from './usersView';

const WithAxios = () => {
  const { users } = useData();
  return <div>{users && <UsersView users={users} />}</div>;
};

export default WithAxios;
