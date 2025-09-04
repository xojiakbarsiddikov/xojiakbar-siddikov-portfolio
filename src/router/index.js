import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import AOS from "aos";
import 'aos/dist/aos.css';

const router = createRouter({
    history: createWebHistory(),
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
                    path: '/working-experience',
                    name: 'working-experience',
                    meta: {
                        breadcrumb: ['Working Experience']
                    },
                    component: () => import('@/views/uikit/List-Work.vue')
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
                    path: '/test-tickets',
                    name: 'test-tickets',
                    meta: {
                        breadcrumb: ['TEST Tickets']
                    },
                    component: () => import('@/views/uikit/List-Tickets.vue')
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
                },
                {
                    path: '/teaching-experience',
                    name: 'Teaching Experience',
                    component: () => import('@/views/pages/Timeline.vue')
                },
                {
                    path: '/university',
                    name: 'university',
                    meta: {
                        breadcrumb: ['University Accomplishments']
                    },
                    component: () => import('@/views/uikit/Media-University.vue')
                },
                {
                    path: '/programming-experience',
                    name: 'Programming Experience',
                    component: () => import('@/views/pages/TimelinePR.vue')
                },
                {
                    path: '/web-projects',
                    name: 'Web Projects',
                    component: () => import('@/views/uikit/Media-WP.vue')
                },
                {
                    path: '/hobbies',
                    name: 'Hobbies & Leisure Activities',
                    component: () => import('@/views/uikit/Media-LeisureAC.vue')
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
