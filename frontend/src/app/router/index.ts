import { createRouter, createWebHistory } from "vue-router";
import { IAppRoute } from "@/app/router/types";

export const routes: IAppRoute[] = [
    {
        path: "/",
        component: () => import("@pages/HistoryPage.vue"),
        meta: { name: "History", layout: "main" },
        isProtected: false,
    },
    {
        path: "/asks",
        component: () => import("@pages/AsksPage.vue"),
        meta: { name: "Asks", layout: "main" },
        isProtected: false,
    },
    {
        path: "/jobs",
        component: () => import("@pages/JobsPage.vue"),
        meta: { name: "Jobs", layout: "main" },
        isProtected: false,
    },
    {
        path: "/polls",
        component: () => import("@pages/PollsPage.vue"),
        meta: { name: "Polls", layout: "main" },
        isProtected: false,
    },
    {
        path: "/error/not-found",
        component: () => import("@pages/NotFoundPage.vue"),
        meta: { name: "Not-found", layout: "error" },
        isProtected: false,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;