<script setup>
import { ref } from 'vue';
// import { PrimeIcons } from '@primevue/core/api';

import AppSubMenu from './AppSubMenu.vue';

const model = ref([
    {
        label: 'SIDDIKOV XOJIAKBAR',
        icon: 'pi pi-home',
        items: [
            {
                label: 'Extracurricular Accomplishments',
                icon: 'pi pi-fw pi-star',
                to: '/'
            },
            {
                label: 'Working Experience',
                icon: 'pi pi-fw pi-map',
                to: '/working-experience'
            },
            {
                label: 'University Accomplishments',
                icon: 'pi pi-globe',
                to: '/university'
            },
            {
                label: 'Web Projects',
                icon: 'pi pi-desktop',
                to: '/web-projects'
            },
            {
                label: 'Recommendation Letters',
                icon: 'pi pi-fw pi-verified',
                to: '/recommendation-letter'
            },
            {
                label: 'Personal Statement & Essay',
                icon: 'pi pi-fw pi-id-card',
                to: '/about-me'
            },
            {
                label: 'Resume',
                icon: 'pi pi-fw pi-user',
                to: '/resume'
            },
            {
                label: 'Grades(G.P.A)',
                icon: 'pi pi-fw pi-sort-amount-up',
                to: '/grades'
            },
            {
                label: 'Hobbies',
                icon: 'pi pi-discord',
                to: '/hobbies'
            },
            {
                label: 'Contacts',
                icon: 'pi pi-fw pi-phone',
                to: '/contact-me'
            }
        ]
    },
]);
</script>

<template>
    <AppSubMenu :model="model"/>
</template>

<style lang="scss" scoped>
    .layout-sidebar .layout-menu .layout-root-menuitem > .layout-menuitem-root-text {
        padding: 0rem 3rem 1rem !important;
    }   
</style>
