import WithProps from '1.basicComponents/1.1.withProps';
import WithCondition from '1.basicComponents/1.2.withCondition';
import WithMap from '1.basicComponents/1.3.withMap';
import WithState from '2.hooks/2.1.withState';
import WithUseEffect from '2.hooks/2.2.withUseEffect';
import WithUseMemo from '2.hooks/2.3.withUseMemo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
} from 'reactRouter/paths';
import LinksBar from './linksBar';
import WithDispatchToChild from '2.hooks/2.5.withDispatchToChild';
import WithUseCallBack from '2.hooks/2.4.withUseCallBack';
import WithMobx from '3.mobx/3.1.withMobx/components';

const WithRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <LinksBar />
        <div data-cy="c'est ici que les composants associés aux routes seront rendered">
          <Routes>
            <Route path={WithPropsRoute} element={<WithProps text={`ma route est ${WithPropsRoute}`} />} />
            <Route
              path={WithConditionRoute}
              element={<WithCondition text={`ma route est ${WithConditionRoute}`} isTitle={true} />}
            />
            <Route path={WithMapRoute} element={<WithMap />} />
            <Route path={WithStateRoute} element={<WithState />} />
            <Route path={WithUseEffectRoute} element={<WithUseEffect />} />
            <Route path={WithUseMemoRoute} element={<WithUseMemo />} />
            <Route path={WithUseCallBackRoute} element={<WithUseCallBack />} />
            <Route path={WithDispatchToChildRoute} element={<WithDispatchToChild />} />
            <Route path={WithMobxRoute} element={<WithMobx />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default WithRoutes;
