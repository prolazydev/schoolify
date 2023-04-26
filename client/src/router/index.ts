import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TestView from '../views/TestView.vue';
import AuthModeView from '../views/auth/AuthModeView.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/test',
            name: 'test',
            component: TestView,
            meta: { layout: 'UserLayout', },
        },
        {
            path: '/auth',
            name: 'AuthRedirect',
            redirect: '/auth/login',
            children: [
                {
                    path: ':mode',
                    beforeEnter: (to) => {
                        console.log(to);
                        if(!to.params.mode) return false;

                        if (to.params.mode === 'login' || to.params.mode === 'register') return true;
                        else return { path: '/auth/login', };
                    },
                    component: AuthModeView,
                    props: true,
                },
            ],
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound,
        },
    ],
});
// const router = createRouter({
//     history: createWebHistory(import.meta.env.BASE_URL,),
//     routes: [
//         {
//             path: '/',
//             name: 'home',
//             component: HomeView,
//             meta: {
//                 layout: UserLayout,
//             },
//         },
//         {
//             path: '/about',
//             name: 'about',
//             // route level code-splitting
//             // this generates a separate chunk (About.[hash].js) for this route
//             // which is lazy-loaded when the route is visited.
//             component: () => import('../views/AboutView.vue'),
//             meta: {
//                 layout: UserLayout,
//             },
//         },
//         {
//             path: '/test',
//             name: 'test',
//             component: TestView,
//             meta: {
//                 layout: UserLayout,
//             },
//         },
//     ],
// },);

export default router;
