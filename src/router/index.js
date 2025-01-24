import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import AOS from "aos";
import 'aos/dist/aos.css';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'e-commerce',
                    meta: {
                        breadcrumb: ['Extracurricular Accomplishments']
                    },
                    component: () => import('@/views/dashboards/Ecommerce.vue')
                },
                {
                    path: '/ielts-certificate',
                    name: 'ielts',
                    meta: {
                        breadcrumb: ['IELTS Score']
                    },
                    component: () => import('@/views/uikit/List-Ielts.vue')
                },
                {
                    path: '/sat-certificate',
                    name: 'sat',
                    meta: {
                        breadcrumb: ['SAT Scores']
                    },
                    component: () => import('@/views/uikit/List.vue')
                },
                {
                    path: '/cefr-certificate',
                    name: 'cefr',
                    meta: {
                        breadcrumb: ['CEFR Scores']
                    },
                    component: () => import('@/views/uikit/List-Cefr.vue')
                },
                {
                    path: '/sport-certificate',
                    name: 'sport',
                    meta: {
                        breadcrumb: ['Athletic Accomplishments']
                    },
                    component: () => import('@/views/uikit/Media-Main.vue')
                },
                {
                    path: '/school-certificate',
                    name: 'school',
                    meta: {
                        breadcrumb: ['Academic Accomplishments']
                    },
                    component: () => import('@/views/uikit/Media-School.vue')
                },
                {
                    path: '/programming-certificate',
                    name: 'programming',
                    meta: {
                        breadcrumb: ['Programming Accomplishments']
                    },
                    component: () => import('@/views/uikit/Media-Programming.vue')
                },
                {
                    path: '/other-certificate',
                    name: 'others',
                    meta: {
                        breadcrumb: ['Other Extra Accomplishments']
                    },
                    component: () => import('@/views/uikit/Media-Others.vue')
                },
                {
                    path: '/recommendation-letter',
                    name: 'recommendation-letters',
                    meta: {
                        breadcrumb: ['Recommendation Letters']
                    },
                    component: () => import('@/views/uikit/List-Letters.vue')
                },
                {
                    path: '/contact-me',
                    name: 'contact-me',
                    meta: {
                        breadcrumb: ['Contacts']
                    },
                    component: () => import('@/views/pages/ContactUs.vue')
                },
                {
                    path: '/about-me',
                    name: 'about-me',
                    meta: {
                        breadcrumb: ['Personal Statement']
                    },
                    component: () => import('@/views/pages/Help.vue')
                },
                {
                    path: '/resume',
                    name: 'resume',
                    meta: {
                        breadcrumb: ['Resume']
                    },
                    component: () => import('@/views/uikit/List-Resume.vue')
                },
                {
                    path: '/grades',
                    name: 'grades',
                    meta: {
                        breadcrumb: ['Grades (G.P.A']
                    },
                    component: () => import('@/views/uikit/List-Grades.vue')
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    AOS.init(); // Initialize AOS
    next();
});

export default router;
