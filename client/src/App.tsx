import './App.css';
import WithProps from '1.basicComponents/1.1.withProps';
import WithCondition from '1.basicComponents/1.2.withCondition';
import WithMap from '1.basicComponents/1.3.withMap';
import WithState from '2.hooks/2.1.withState';
import WithUseEffect from '2.hooks/2.2.withUseEffect';
import WithUseMemo from '2.hooks/2.3.withUseMemo';
import WithUseCallBack from '2.hooks/2.4.withUseCallBack';
import WithDispatchToChild from '2.hooks/2.5.withDispatchToChild';
import WithMobx from '3.mobx/3.1.withMobx/components';
import WithRoutes from '4.reactRouter/4.1.withRoutes';
import WithRoutesAdvanced from '4.reactRouter/4.2.withRoutesAdvanced';
import WithAxios from '5.axios/5.1.withAxios';
import WithMui from '6.mui/6.1.withMui';
import WithAll from '7.allExemples/7.1.withAll';

const App1 = () => {
  return <WithProps text="titre1" />;
};

const App2 = () => {
  return <WithCondition text="titre1" isTitle={true} />;
};

const App3 = () => {
  return <WithMap />;
};

const App4 = () => {
  return <WithState />;
};

const App5 = () => {
  return <WithUseEffect />;
};

const App6 = () => {
  return <WithUseMemo />;
};

const App7 = () => {
  return <WithUseCallBack />;
};

const App8 = () => {
  return <WithDispatchToChild />;
};

const App9 = () => {
  return <WithMobx />;
};

const App10 = () => {
  return <WithRoutes />;
};

const App11 = () => {
  return <WithRoutesAdvanced />;
};

const App12 = () => {
  return <WithAxios />;
};

const App13 = () => {
  return <WithMui />;
};

const App14 = () => {
  return <WithAll />;
};

export default App14;
