import { createContext } from 'react';
import RootStore from './RootStore';

export const createStore = (): RootStore => new RootStore();

export const StoreContext = createContext<RootStore>({} as RootStore);

export const StoreProvider = StoreContext.Provider;
