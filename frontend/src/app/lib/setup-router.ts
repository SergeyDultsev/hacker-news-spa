import type { App } from "vue";
import router from "@/app/router";

export const setupRoutes = (app: App) => app.use(router);