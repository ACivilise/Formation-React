import React from "react";
import { Box, Typography } from "@mui/material";
import ObserverComponent from "./observerComponent";
import UpdaterComponent from "./updaterComponent";
import { createStore, StoreProvider } from "../stores";

const ComponentWithMobx = () => {
  const rootStore = createStore();

  return (
    <Box sx={{ width: "100%" }}>
      <Typography>Composant fournissant le store</Typography>
      <StoreProvider value={rootStore}>
        <ObserverComponent />
        <UpdaterComponent />
      </StoreProvider>
    </Box>
  );
};

export default ComponentWithMobx;
