import {} from 'axios/models/types';
import { useCallback } from 'react';
import { UseDataProps } from './types';
import { useNavigate } from 'react-router-dom';

const useData = (): UseDataProps => {
  const navigate = useNavigate();

  const gotToLink = useCallback(
    (path: string, params: [string, string][] | undefined) => {
      let urlToVisit = path;
      if (params) {
        params.forEach(([paramKey, paramValue]) => (urlToVisit = urlToVisit.replace(paramKey, paramValue)));
      }
      navigate(urlToVisit);
    },
    [navigate],
  );

  return {
    gotToLink,
  };
};

export default useData;
