export interface IAppRouteMeta {
    name: string;
    layout: "main" | "error" | "auth";
}

export interface IAppRoute extends IAppRouteMeta {
    meta: IAppRouteMeta;
    isProtected: boolean;
}