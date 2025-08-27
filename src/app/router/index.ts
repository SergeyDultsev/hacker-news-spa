import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: (RouteRecordRaw & { isProtected: boolean })[] = [
    {
        path: '/',
        name: 'main',
        component: () => import('@app/layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('@pages/BestPage.vue') },
        ],
        isProtected: true,
    }
];

const index = createRouter({
    history: createWebHistory(),
    routes
});

export default index;