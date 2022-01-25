import { useCallback } from "react";
import { useStore } from "mobx/8.withMobx/stores";

const UpdaterComponent = () => {
  const { updateColor, color } = useStore();

  const changeColor = useCallback(() => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    updateColor(`#${randomColor}`);
  }, [updateColor]);

  return (
    <button
      onClick={() => changeColor()}
    >{`Change la couleur ${color}`}</button>
  );
};

export default UpdaterComponent;
