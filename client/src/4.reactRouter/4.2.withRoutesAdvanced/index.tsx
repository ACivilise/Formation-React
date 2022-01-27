import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import useData from './hooks';
import LinksBar from './linksBar';

const WithRoutesAdvanced = () => {
  const { routes, setCurrentId } = useData();
  return (
    <div>
      <BrowserRouter>
        <input onChange={(event) => setCurrentId(event.target.value)}></input>
        <LinksBar routes={routes} />
        <div data-info="c'est ici que les composants associés aux routes seront rendered">
          <Routes>
            {routes.map(({ key, path, element }) => (
              <Route key={key} path={path} element={element} />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default WithRoutesAdvanced;
