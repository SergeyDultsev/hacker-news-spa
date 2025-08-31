import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: (RouteRecordRaw & { isProtected: boolean })[] = [
    {
        path: '/',
        name: 'main',
        component: () => import('@pages/BestPage.vue'),
        meta: { layout: 'main' },
        isProtected: false,
    },
    {
        path: '/error/not-found',
        name: 'error',
        component: () => import('@pages/NotFoundPage.vue'),
        meta: { layout: 'error' },
        isProtected: false,
    }
];

const index = createRouter({
    history: createWebHistory(),
    routes
});

export default index;