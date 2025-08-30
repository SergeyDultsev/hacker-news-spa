import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export const routes: (RouteRecordRaw & { isProtected: boolean })[] = [
    {
        path: '/',
        name: 'main',
        component: () => import('@app/layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('@pages/BestPage.vue'), meta: { layout: 'main' } },
        ],
        isProtected: false,
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('@app/layouts/ErrorLayout.vue'),
        children: [
            { path: 'not-found', component: () => import('@pages/NotFoundPage.vue'), meta: { layout: 'error' } },
        ],
        isProtected: false,
    }
];

const index = createRouter({
    history: createWebHistory(),
    routes
});

export default index;