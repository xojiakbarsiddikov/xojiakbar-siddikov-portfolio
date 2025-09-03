<script setup>
import AppMenu from './AppMenu.vue';
</script>

<template>
    <div class="layout-sidebar">
        <router-link to="/about-me" class="app-logo" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="600">
            <img src="/public/demo/images/mine.png" alt="" style="height: 157px;">
        </router-link>

        <div class="layout-menu-container" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
            <AppMenu />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .layout-sidebar .app-logo {
        padding: 1.5rem 0 1rem 0 !important;
    }
</style>
