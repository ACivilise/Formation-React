import { observer } from "mobx-react";
import { useStore } from "mobx/9.withMobx/stores";
import { flexRow } from "styles";

const ObserverComponent = () => {
  const { color } = useStore();
  return (
    <div
      style={{
        width: "100%",
        ...flexRow,
        backgroundColor: color ?? "#fff",
      }}
    >
      <h1>{`la couleur acttuel est ${color ?? "#fff"}`}</h1>
    </div>
  );
};

export default observer(ObserverComponent);
