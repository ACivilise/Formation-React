import React from 'react';
import { useContext } from 'react';
import { observer } from 'mobx-react';
import { StoreContext } from '3.mobx/stores';
import { flexRow } from 'styles';

const ObserverComponent = () => {
  const { color } = useContext(StoreContext);
  return (
    <div
      style={{
        width: '100%',
        ...flexRow,
        backgroundColor: color ?? '#fff',
      }}
    >
      <h1>{`la couleur acttuel est ${color ?? '#fff'}`}</h1>
    </div>
  );
};

export default observer(ObserverComponent);
