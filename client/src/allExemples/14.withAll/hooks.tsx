import WithMobx from "mobx/9.withMobx/components";
import WithMap from "components/3.withMap";
import WithState from "hooks/4.withState";
import { useMemo, useState } from "react";
import { Datas, LinkRouteType } from "./types";
import WithParamsUrl from "./withParamsUrl";
import { v4 as uuidv4 } from "uuid";
import WithProps from "components/1.withProps";
import WithCondition from "components/2.withCondition";
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
} from "reactRouter/paths";
import WithUseEffect from "hooks/5.withUseEffect";
import WithUseMemo from "hooks/6.withUseMemo";
import WithUseCallBack from "hooks/7.withUseCallBack";
import WithDispatchToChild from "hooks/8.withDispatchToChild";
import WithAxios from "axios/12.withAxios";

const useData = (): Datas => {
  const [currentId, setCurrentId] = useState(uuidv4());

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
          path: WithConditionRoute,
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
          libelle: `aller vers ${WithParamsUrlRoute.replace(":id", currentId)}`,
          params: [[":id", currentId]],
        },
      ] as LinkRouteType[],
    [currentId]
  );

  return {
    routes,
    setCurrentId,
  };
};

export default useData;
