import { UserDescription } from '5.axios/models/types';
import { useState, useEffect } from 'react';
import { UseDataProps } from './types';
import axios from 'axios';
import { USERS } from './apiRoutes';

const useData = (): UseDataProps => {
  const [users, setUsers] = useState<UserDescription[]>();

  useEffect(() => {
    axios.get<UserDescription[]>(USERS).then((response) => {
      if (response.data) setUsers(response.data);
    });
  }, []);

  return {
    users,
  };
};

export default useData;
