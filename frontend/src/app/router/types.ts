export interface IAppRouteMeta {
    name: string;
    layout: "main" | "error";
}

export interface IAppRoute extends IAppRouteMeta {
    meta: IAppRouteMeta;
    isProtected: boolean;
}