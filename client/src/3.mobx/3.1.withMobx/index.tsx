import ObserverComponent from './observerComponent';
import UpdaterComponent from './updaterComponent';
import { createStore, StoreProvider } from '../stores';
import { flexColumn } from 'styles';

const WithMobx = () => {
  const rootStore = createStore();

  return (
    <div
      style={{
        width: '100%',
        ...flexColumn,
      }}
    >
      <h1>Composant dont les enfants utilisent un store</h1>
      <StoreProvider value={rootStore}>
        <ObserverComponent />
        <UpdaterComponent />
      </StoreProvider>
    </div>
  );
};

export default WithMobx;
