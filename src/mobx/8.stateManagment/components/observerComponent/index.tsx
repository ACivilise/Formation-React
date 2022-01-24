import React from "react";
import { observer } from "mobx-react";
import { useStore } from "mobx/8.stateManagment/stores";

const ObserverComponent = () => {
  const { color } = useStore();
  return (
    <div style={{ width: "100%", backgroundColor: color ?? "#fff" }}>
      <h1>{`la couleur acttuel est ${color ?? "#fff"}`}</h1>
    </div>
  );
};

export default observer(ObserverComponent);
