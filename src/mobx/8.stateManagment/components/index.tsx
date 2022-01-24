import React from "react";
import ObserverComponent from "./observerComponent";
import UpdaterComponent from "./updaterComponent";
import { createStore, StoreProvider } from "../stores";

const ComponentWithMobx = () => {
  const rootStore = createStore();

  return (
    <div style={{ width: "100%" }}>
      <h1>Composant fournissant le store</h1>
      <StoreProvider value={rootStore}>
        <ObserverComponent />
        <UpdaterComponent />
      </StoreProvider>
    </div>
  );
};

export default ComponentWithMobx;
