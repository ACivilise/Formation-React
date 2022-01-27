import { action, makeAutoObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class RootStore {
  color: string | undefined;

  constructor() {
    makeAutoObservable(this, {
      color: observable,
      updateColor: action,
    });

    makePersistable(this, {
      name: 'RootStore',
      properties: ['color'],
      storage: window.localStorage,
    });
  }

  updateColor = (newColor: string) => {
    this.color = newColor;
  };
}

export default RootStore;
