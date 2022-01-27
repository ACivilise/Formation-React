import { UserDescription } from '5.axios/models/types';
import { useEffect } from 'react';

const useData = (users: UserDescription[]): Record<string, unknown> => {
  useEffect(() => {
    console.log(users);
  }, [users]);

  return {};
};

export default useData;
