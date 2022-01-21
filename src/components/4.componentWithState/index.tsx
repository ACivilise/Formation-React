import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ComponentWithCondition from "../2.componentWithCondition";

const ComponentWithState = () => {
  const [isBig, setIsBig] = useState(false);
  return (
    <Box>
      <Button onClick={() => setIsBig(!isBig)}>
        modifier la taille du titre
      </Button>
      <ComponentWithCondition title="ComponentWithState" big={isBig} />
    </Box>
  );
};

export default ComponentWithState;
