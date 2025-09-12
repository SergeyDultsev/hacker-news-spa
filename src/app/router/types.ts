export interface AppRouteMeta {
    name: string;
    layout: "main" | "error";
}

export interface AppRoute extends AppRouteMeta {
    meta: AppRouteMeta;
    isProtected: boolean;
}