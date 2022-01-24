import React from "react";
import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react";
import { useStore } from "mobx/8.stateManagment/stores";

const ObserverComponent = () => {
  const { color } = useStore();
  return (
    <Box sx={{ width: "100%", backgroundColor: color ?? "#fff" }}>
      <Typography>{`la couleur acttuel est ${color ?? "#fff"}`}</Typography>
    </Box>
  );
};

export default observer(ObserverComponent);
