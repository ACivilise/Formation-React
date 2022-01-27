import { action, makeAutoObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class AllExemplesRootStore {
  color: string | undefined;

  constructor() {
    makeAutoObservable(this, {
      color: observable,
      updateColor: action,
    });

    makePersistable(this, {
      name: 'AllExemplesRootStore',
      properties: ['color'],
      storage: window.localStorage,
    });
  }

  updateColor = (newColor: string) => {
    this.color = newColor;
  };
}

export default AllExemplesRootStore;
