export interface IAppRoute {
    path: string;
    component: () => Promise<any>;
    meta: {
        name: string;
        layout: "main" | "error" | "auth";
        isProtected: boolean;
    };
}
