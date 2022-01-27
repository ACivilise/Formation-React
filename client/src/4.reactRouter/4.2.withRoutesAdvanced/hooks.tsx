import WithMobx from '3.mobx/3.1.withMobx/components';
import WithMap from '1.basicComponents/1.3.withMap';
import WithState from '2.hooks/2.1.withState';
import { WithMapRoute, WithStateRoute, WithMobxRoute, WithParamsUrlRoute } from 'reactRouter/paths';
import { useMemo, useState } from 'react';
import { Datas, LinkRouteType } from './types';
import WithParamsUrl from './withParamsUrl';
import { v4 as uuidv4 } from 'uuid';

const useData = (): Datas => {
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
          libelle: `aller vers ${WithParamsUrlRoute.replace(':id', currentId)}`,
          params: [[':id', currentId]],
        },
      ] as LinkRouteType[],
    [currentId],
  );

  return {
    routes,
    setCurrentId,
  };
};

export default useData;
