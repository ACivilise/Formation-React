import { Dispatch, SetStateAction } from 'react';
import { RouteObject } from 'react-router';

export type LinkRouteType = RouteObject & {
  key: string;
  libelle: string;
  params?: [string, string][] | undefined;
};

export type Datas = {
  routes: LinkRouteType[];
  setCurrentId: Dispatch<SetStateAction<string>>;
};
