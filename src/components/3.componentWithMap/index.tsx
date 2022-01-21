import React from "react";
import { Box } from "@mui/material";
import ComponentWithCondition from "../2.componentWithCondition";

const ComponentWithMap = () => {
  const titles = [
    {
      title: "premier titre",
      big: false,
    },
    {
      title: "deuxième titre",
      big: false,
    },
    {
      title: "troisième titre",
      big: true,
    },
  ];
  return (
    <Box>
      {titles.map(({ title, big }) => (
        <ComponentWithCondition title={title} big={big} />
      ))}
    </Box>
  );
};

export default ComponentWithMap;
