import React from 'react';
import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import { LinksBarProps } from './types';

const LinksBar = ({ routes }: LinksBarProps) => {
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

  return (
    <div>
      {routes.map(({ key, path, params, libelle }) => (
        <button key={key} onClick={() => (path ? gotToLink(path, params) : undefined)}>
          {libelle}
        </button>
      ))}
    </div>
  );
};

export default LinksBar;
