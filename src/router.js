import { createWebHistory, createRouter } from 'vue-router';

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () =>
                import(/* webpackChunkName: "home" */ './views/Home.vue'),
        },
        {
            path: '/projects',
            name: 'projects',
            component: () =>
                import(
                    /* webpackChunkName: "projects" */ './views/Projects.vue'
                ),
        },
        {
            path: '/cv',
            name: 'cv',
            component: () =>
                import(/* webpackChunkName: "cv" */ './views/CV.vue'),
        },
    ],
});
