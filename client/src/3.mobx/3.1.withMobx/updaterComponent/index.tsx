import { useCallback, useContext } from 'react';
import { StoreContext } from '3.mobx/stores';

const UpdaterComponent = () => {
  const { updateColor, color } = useContext(StoreContext);

  const changeColor = useCallback(() => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    updateColor(`#${randomColor}`);
  }, [updateColor]);

  return <button onClick={() => changeColor()}>{`Change la couleur ${color}`}</button>;
};

export default UpdaterComponent;
