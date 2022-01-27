import { createContext, useContext } from 'react';
import AllExemplesStore from './AllExemplesStore';

export const createStore = (): AllExemplesStore => new AllExemplesStore();

export const StoreContext = createContext<AllExemplesStore>({} as AllExemplesStore);

export const useStore = (): AllExemplesStore => useContext(StoreContext);
export const StoreProvider = StoreContext.Provider;
