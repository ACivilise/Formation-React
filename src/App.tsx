import WithMobx from "mobx/8.withMobx/components";
import WithUseCallBack from "mobx/8.withMobx/components";
import "./App.css";
import WithProps from "components/1.withProps";
import WithCondition from "components/2.withCondition";
import WithMap from "components/3.withMap";
import WithState from "hooks/4.withState";
import WithUseEffect from "hooks/5.withUseEffect";
import WithUseMemo from "hooks/6.withUseMemo";
import WithRoutes from "reactRouter/9.withRoutes";
import WithRoutesAdvanced from "reactRouter/10.withRoutesAdvanced";

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
  return <WithMobx />;
};

const App9 = () => {
  return <WithRoutes />;
};

const App = () => {
  return <WithRoutesAdvanced />;
};

export default App;
