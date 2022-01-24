import React from "react";
import { Box, Typography } from "@mui/material";
import UpdaterComponent from "./updaterComponent";
import { createStore, StoreProvider } from "../stores";

const ComponentWithUseCallBack = () => {
  const rootStore = createStore();

  return (
    <Box sx={{ width: "100%" }}>
      <Typography>Composant fournissant le store</Typography>
      <StoreProvider value={rootStore}>
        <UpdaterComponent />
      </StoreProvider>
    </Box>
  );
};

export default ComponentWithUseCallBack;
