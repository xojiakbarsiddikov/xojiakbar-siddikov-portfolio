<script setup>
import { ref } from 'vue';
import { useLayout } from '@/layout/composables/layout';
const name = ref('');
const email = ref('');
const message = ref('');
const content = ref([
    { icon: 'pi pi-fw pi-google',link: "/teaching-experience", aos: 'fade-up' },
    { icon: 'pi pi-fw pi-telegram', link: '/programming-experience', aos: 'fade-down' },
]);
const { layoutConfig, contextPath } = useLayout();
</script>

<template>
    <div class="grid surface-card grid-nogutter p-6 border-1 surface-border" :style="{ borderRadius: '6px' }">
        <div class="col-12" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
            <h4 class="text-900 work-h4" style="margin: 0;">Teaching <span class="blue-color">&</span> Programming <span class="blue-color">Experience</span></h4>
        </div>
        <div class="col-12 mt-4">
            <div class="grid grid-nogutter px-2 flex-column md:flex-row" :style="{ columnGap: '4rem', rowGap: '4rem' }">
                <router-link v-for="(item, i) in content" :to="item.link" :data-aos="item.aos" data-aos-easing="linear" data-aos-duration="600" :key="i" class="background col flex flex-column justify-content-center text-center align-items-center border-1 surface-border py-5 px-4 border-round contact-hover" style="cursor: pointer;">
                </router-link>
            </div>
        </div>
        <div class="working-text-wrapper">
            <span data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600"><router-link to="/teaching-experience">Teaching 👨🏽‍🏫👨‍🎓</router-link></span>
            <span data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600"><router-link to="/programming-experience">Programming 👨🏽‍💻💻</router-link></span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
 .contact-hover:hover {
    transform: scale(1.03, 1.04) !important;
    transition: all 0.2s;
 }
 .blue-color {
    color: #6366f1;
 }
 span > a {
    color: #0000EE;
 }
 .py-5 {
    padding-top: 28rem !important;
    padding-bottom: 12rem !important;
}
.background:nth-child(1) {
    background-image: url('./public/demo/images/working/teaching/teacher-assistant2.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.working-text-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
}
.working-text-wrapper > span > a {
    font-size: 1.7rem;
    margin-top: 10px;
}
.working-text-wrapper > span > a:hover {
    color: #1e293b;
}
.background:nth-child(2) {
    background-image: url('./public/demo/images/working/programming.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

@media screen and (max-width: 1600px) {
    .py-5 {
        padding-top: 29rem !important;
        padding-bottom: 0rem !important;
    }
}
@media screen and (max-width: 1030px) {
    .py-5 {
        padding-top: 16rem !important;
        padding-bottom: 0rem !important;
    }
}

@media screen and (max-width: 700px) {
    .py-5 {
        padding-top: 22rem !important;
        padding-bottom: 0rem !important;
    }
    .working-text-wrapper {
        display: none;
    }
    .work-h4 {
        font-size: 1rem;
    }
}

</style>
