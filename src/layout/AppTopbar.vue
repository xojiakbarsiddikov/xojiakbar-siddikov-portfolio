<script setup>
import AppBreadcrumb from './AppBreadcrumb.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';

const { onMenuToggle, onProfileSidebarToggle } = useLayout();

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);

onMounted(() => {
    bindOutsideClickListener();
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};

const showProfileSidebar = () => {
    onProfileSidebarToggle();
};
</script>

<template>
    <div class="layout-topbar">
        <div class="topbar-start">
            <button type="button" class="topbar-menubutton p-link p-trigger" @click="onMenuToggle">
                <i class="pi pi-bars"></i>
            </button>

            <AppBreadcrumb class="topbar-breadcrumb"></AppBreadcrumb>
        </div>

        <div class="topbar-end">
            <ul class="topbar-menu">
                <li class="topbar-search">
                    <span class="p-input-icon-left">
                        <i class="pi pi-search"></i>
                        <InputText type="text" placeholder="Search" class="w-12rem sm:w-full" />
                    </span>
                </li>
                <li class="topbar-profile">
                    <button type="button" class="p-link" ><img src="/images/mine.png" alt="Profile" /></button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.layout-topbar .topbar-menu li.topbar-profile img {
    width: 2.2rem !important;
    height: 2.6rem !important;
    border-radius: 50px !important;
}
.layout-topbar .topbar-menu li.topbar-profile {
    display: block;
    margin-right: 8px;
}
.layout-topbar .topbar-menu li.topbar-profile button {
    width: 2.2rem !important;
    height: 2.6rem !important;
}
</style>
