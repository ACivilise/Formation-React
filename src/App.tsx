import "./App.css";
import ComponentWithProps from "./components/1.componentWithProps";
import ComponentWithCondition from "./components/2.componentWithCondition";
import ComponentWithMap from "./components/3.componentWithMap";
import ComponentWithState from "./components/4.componentWithState";
import ComponentWithUseEffect from "./components/5.componentWithUseEffect";
import ComponentWithUseMemo from "./components/6.componentWithUseMemo";

const App1 = () => {
  return <ComponentWithProps title="titre1" />;
};

const App2 = () => {
  return <ComponentWithCondition title="titre1" big={true} />;
};

const App3 = () => {
  return <ComponentWithMap />;
};

const App4 = () => {
  return <ComponentWithState />;
};

const App5 = () => {
  return <ComponentWithUseEffect />;
};

const App = () => {
  return <ComponentWithUseMemo />;
};

export default App;
