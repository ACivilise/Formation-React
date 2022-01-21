import React, { useCallback, useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const ComponentWithUseCallBack = () => {
  const firstTilte = "premier titre";
  const secondTilte = "deuxième titre";

  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [color, setColor] = useState("#000");

  const changeColor = useCallback(() => {
    if (showFirst && showSecond) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      setColor(`#${randomColor}`);
    }
  }, [showFirst, showSecond]);

  useEffect(() => {
    changeColor();
  }, [changeColor]);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography>{color}</Typography>
      <Box sx={{ width: "50%" }}>
        <Button onClick={() => setShowFirst(!showFirst)}>
          {`${showFirst ? "cacher" : "afficher"} le ${firstTilte}`}
        </Button>
        <Button onClick={() => setShowSecond(!showSecond)}>
          {`${showFirst ? "cacher" : "afficher"} le ${secondTilte}`}
        </Button>
      </Box>
      <Box sx={{ width: "50%", backgroundColor: color }}>
        {showFirst && <Typography variant="h1">{firstTilte}</Typography>}
        {showSecond && <Typography variant="h1">{secondTilte}</Typography>}
      </Box>
    </Box>
  );
};

export default ComponentWithUseCallBack;
