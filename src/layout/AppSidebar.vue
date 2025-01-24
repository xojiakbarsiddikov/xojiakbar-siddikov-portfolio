<script setup>
import AppMenu from './AppMenu.vue';
</script>

<template>
    <div class="layout-sidebar">
        <router-link to="/about-me" class="app-logo">
            <img src="/demo/images/my-avatar.png" alt="" style="height: 157px;">
        </router-link>

        <div class="layout-menu-container">
            <AppMenu />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .layout-sidebar .app-logo {
        padding: 1.5rem 0 1rem 0 !important;
    }
</style>
