import React, { useCallback } from "react";
import { Button } from "@mui/material";
import { useStore } from "mobx/8.stateManagment/stores";

const UpdaterComponent = () => {
  const { updateColor, color } = useStore();

  const changeColor = useCallback(() => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    updateColor(`#${randomColor}`);
  }, [updateColor]);

  return (
    <Button
      onClick={() => changeColor()}
    >{`Change la couleur ${color}`}</Button>
  );
};

export default UpdaterComponent;
