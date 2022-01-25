import { flexColumn, flexRow } from "styles";
import Child from "./child";
import useData from "./hooks";

const WithDispatchToChild = () => {
  const { tilte, color, changeColor } = useData();
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: color,
        ...flexColumn,
      }}
    >
      <h1> Composant avec un hook de callback (useCallback)</h1>
      <div
        style={{
          width: "100%",
          ...flexRow,
        }}
      >
        <h1>{color}</h1>
      </div>
      <div
        style={{
          width: "100%",
          ...flexRow,
        }}
      >
        <Child changeColor={changeColor} color={color} />
        <h1>{tilte}</h1>
      </div>
    </div>
  );
};

export default WithDispatchToChild;
