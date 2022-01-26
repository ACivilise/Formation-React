import "./App.css";
import WithProps from "components/1.withProps";
import WithCondition from "components/2.withCondition";
import WithMap from "components/3.withMap";
import WithState from "hooks/4.withState";
import WithUseEffect from "hooks/5.withUseEffect";
import WithUseMemo from "hooks/6.withUseMemo";
import WithUseCallBack from "hooks/7.withUseCallBack";
import WithDispatchToChild from "hooks/8.withDispatchToChild";
import WithMobx from "mobx/9.withMobx/components";
import WithRoutes from "reactRouter/10.withRoutes";
import WithRoutesAdvanced from "reactRouter/11.withRoutesAdvanced";
import WithAxios from "axios/12.withAxios";
import WithMui from "mui/13.withMui";
import WithAll from "allExemples/14.withAll";

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
