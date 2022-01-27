import React from 'react';
import WithMobx from '3.mobx/3.1.withMobx';

import WithMap from '1.basicComponents/1.3.withMap';
import WithState from '2.hooks/2.1.withState';
import { useMemo, useState } from 'react';
import { Datas, LinkRouteType } from './types';
import WithParamsUrl from './withParamsUrl';
import { v4 as uuidv4 } from 'uuid';
import WithProps from '1.basicComponents/1.1.withProps';
import WithCondition from '1.basicComponents/1.2.withCondition';
import {
  WithUseEffectRoute,
  WithMapRoute,
  WithStateRoute,
  WithMobxRoute,
  WithParamsUrlRoute,
  WithPropsRoute,
  WithConditionRoute,
  WithUseMemoRoute,
  WithUseCallBackRoute,
  WithDispatchToChildRoute,
  WithAxiosRoute,
} from '4.reactRouter/paths';
import WithUseEffect from '2.hooks/2.2.withUseEffect';
import WithUseMemo from '2.hooks/2.3.withUseMemo';
import WithUseCallBack from '2.hooks/2.4.withUseCallBack';
import WithDispatchToChild from '2.hooks/2.5.withDispatchToChild';
import WithAxios from '5.axios/5.1.withAxios';

const useData = (): Datas => {
  const [currentId, setCurrentId] = useState(uuidv4());
  debugger;

  const routes = useMemo(
    () =>
      [
        {
          key: WithPropsRoute,
          path: WithPropsRoute,
          element: <WithProps text="from With All" />,
          libelle: `aller vers ${WithPropsRoute}`,
        },
        {
          key: WithConditionRoute,
          path: WithConditionRoute,
          element: <WithCondition text="from With All" isTitle={true} />,
          libelle: `aller vers ${WithConditionRoute}`,
        },
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
          key: WithUseEffectRoute,
          path: WithUseEffectRoute,
          element: <WithUseEffect />,
          libelle: `aller vers ${WithUseEffectRoute}`,
        },
        {
          key: WithUseMemoRoute,
          path: WithUseMemoRoute,
          element: <WithUseMemo />,
          libelle: `aller vers ${WithUseMemoRoute}`,
        },
        {
          key: WithUseCallBackRoute,
          path: WithUseCallBackRoute,
          element: <WithUseCallBack />,
          libelle: `aller vers ${WithUseCallBackRoute}`,
        },
        {
          key: WithDispatchToChildRoute,
          path: WithDispatchToChildRoute,
          element: <WithDispatchToChild />,
          libelle: `aller vers ${WithDispatchToChildRoute}`,
        },
        {
          key: WithMobxRoute,
          path: WithMobxRoute,
          element: <WithMobx />,
          libelle: `aller vers ${WithMobxRoute}`,
        },
        {
          key: WithAxiosRoute,
          path: WithAxiosRoute,
          element: <WithAxios />,
          libelle: `aller vers ${WithAxiosRoute}`,
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
