import { LinkRouteType } from "../types";

export type LinksBarProps = {
    routes: LinkRouteType[],
}

export type UseDataProps = {
    gotToLink: (path: string, params: [string, string][] | undefined) => void;
};