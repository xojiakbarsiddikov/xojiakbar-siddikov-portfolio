<script setup>
import AppMenuItem from './AppMenuItem.vue';

defineProps({
    model: {
        type: Array,
        default: null
    }
});
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <AppMenuItem :item="item" root :index="i" />

            <li class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss">
  .layout-sidebar .layout-menu .layout-root-menuitem > .layout-menuitem-root-text {
        padding: 0rem 3rem 1rem !important;
        text-align: center;
    } 
</style>
