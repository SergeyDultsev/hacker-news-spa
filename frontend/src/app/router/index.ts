import { createRouter, createWebHistory } from "vue-router";
import { IAppRoute } from "@/app/router/types";
import { useUserStore } from "@entities/user/user";

export const routes: IAppRoute[] = [
    {
        path: "/",
        component: () => import("@pages/history/HistoryPage.vue"),
        meta: { name: "History", layout: "main", isProtected: false, },
    },
    {
        path: "/asks",
        component: () => import("@pages/ask/AsksPage.vue"),
        meta: { name: "Asks", layout: "main", isProtected: false },
    },
    {
        path: "/jobs",
        component: () => import("@pages/job/JobsPage.vue"),
        meta: { name: "Jobs", layout: "main", isProtected: false },
    },
    {
        path: "/profile",
        component: () => import("@pages/profile/ProfilePage.vue"),
        meta: { name: "Profile", layout: "main", isProtected: true },
    },
    {
        path: "/auth",
        component: () => import("@pages/auth/AuthPage/AuthPage.vue"),
        meta: { name: "Auth", layout: "auth", isProtected: false },
    },
    {
        path: "/register",
        component: () => import("@pages/auth/RegisterPage/RegisterPage.vue"),
        meta: { name: "Register", layout: "auth", isProtected: false, },
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import("@pages/NotFoundPage.vue"),
        meta: { name: "Not-found", layout: "error", isProtected: false },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();

    if (to.meta.isProtected && !userStore.isAuth) {
        next('auth')
    } else {
        next();
    }
})

export default router;