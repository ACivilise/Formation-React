import { RouteObject } from 'react-router';

export type LinkRouteType = RouteObject & {
    key: string;
    libelle: string;
    params?: [string, string][] | undefined;
};