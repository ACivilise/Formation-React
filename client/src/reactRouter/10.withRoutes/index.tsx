import WithProps from "components/1.withProps";
import WithCondition from "components/2.withCondition";
import WithMap from "components/3.withMap";
import WithState from "hooks/4.withState";
import WithUseEffect from "hooks/5.withUseEffect";
import WithUseMemo from "hooks/6.withUseMemo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  WithPropsRoute,
  WithConditionRoute,
  WithMapRoute,
  WithStateRoute,
  WithUseEffectRoute,
  WithUseMemoRoute,
  WithUseCallBackRoute,
  WithMobxRoute,
  WithDispatchToChildRoute,
} from "reactRouter/paths";
import LinksBar from "./linksBar";
import WithDispatchToChild from "hooks/8.withDispatchToChild";
import WithUseCallBack from "hooks/7.withUseCallBack";
import WithMobx from "mobx/9.withMobx/components";

const WithRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <LinksBar />
        <div data-cy="c'est ici que les composants associés aux routes seront rendered">
          <Routes>
            <Route
              path={WithPropsRoute}
              element={<WithProps text={`ma route est ${WithPropsRoute}`} />}
            />
            <Route
              path={WithConditionRoute}
              element={
                <WithCondition
                  text={`ma route est ${WithConditionRoute}`}
                  isTitle={true}
                />
              }
            />
            <Route path={WithMapRoute} element={<WithMap />} />
            <Route path={WithStateRoute} element={<WithState />} />
            <Route path={WithUseEffectRoute} element={<WithUseEffect />} />
            <Route path={WithUseMemoRoute} element={<WithUseMemo />} />
            <Route path={WithUseCallBackRoute} element={<WithUseCallBack />} />
            <Route
              path={WithDispatchToChildRoute}
              element={<WithDispatchToChild />}
            />
            <Route path={WithMobxRoute} element={<WithMobx />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default WithRoutes;
