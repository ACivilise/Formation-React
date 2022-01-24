import { action, makeAutoObservable, observable } from "mobx";

class RootStore {
  color: string | undefined;

  constructor() {
    makeAutoObservable(this, {
      color: observable,
      updateColor: action,
    });
  }

  updateColor = (newColor: string) => {
    this.color = newColor;
  };
}

export default RootStore;
