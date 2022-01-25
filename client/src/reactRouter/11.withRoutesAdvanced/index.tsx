import WithMobx from "mobx/9.withMobx/components";
import WithMap from "components/3.withMap";
import WithState from "hooks/4.withState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  WithMapRoute,
  WithStateRoute,
  WithMobxRoute,
  WithParamsUrlRoute,
} from "reactRouter/paths";
import LinksBar from "./linksBar";
import { useMemo, useState } from "react";
import { LinkRouteType } from "./types";
import WithParamsUrl from "./withParamsUrl";
import { v4 as uuidv4 } from "uuid";

const WithRoutesAdvanced = () => {
  const [currentId, setCurrentId] = useState(uuidv4());

  const routes = useMemo(
    () =>
      [
        {
          key: WithMapRoute,
          path: WithMapRoute,
          element: <WithMap />,
          libelle: `aller vers ${WithMapRoute}`,
        },
        {
          key: WithStateRoute,
          path: WithStateRoute,
          element: <WithState />,
          libelle: `aller vers ${WithStateRoute}`,
        },
        {
          key: WithMobxRoute,
          path: WithMobxRoute,
          element: <WithMobx />,
          libelle: `aller vers ${WithMobxRoute}`,
        },
        {
          key: WithParamsUrlRoute,
          path: WithParamsUrlRoute,
          element: <WithParamsUrl />,
          libelle: `aller vers ${WithParamsUrlRoute.replace(":id", currentId)}`,
          params: [[":id", currentId]],
        },
      ] as LinkRouteType[],
    [currentId]
  );

  return (
    <div>
      <BrowserRouter>
        <input onChange={(event) => setCurrentId(event.target.value)}></input>
        <LinksBar routes={routes} />
        <div data-cy="c'est ici que les composants associés aux routes seront rendered">
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
