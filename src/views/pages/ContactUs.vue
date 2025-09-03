<script setup>
import { ref } from 'vue';
import { useLayout } from '@/layout/composables/layout';
const name = ref('');
const email = ref('');
const message = ref('');
const content = ref([
    { icon: 'pi pi-fw pi-google', title: 'Email Address', info: 'siddikov.dev2007@gmail.com', link: "mailto:siddikov.dev2007@gmail.com", aos: 'fade-down' },
    { icon: 'pi pi-fw pi-phone', title: 'Phone', info: '+998 (93) 799-02-37', link: 'tel:+998937990237', aos: 'fade-up' },
    { icon: 'pi pi-fw pi-telegram', title: 'Telegram', info: '@the_siddikov', link: 'https://t.me/the_siddikov', aos: 'fade-down' },
]);
const { layoutConfig, contextPath } = useLayout();
</script>

<template>
    <div class="grid surface-card grid-nogutter p-5 border-1 surface-border" :style="{ columnGap: '2rem', rowGap: '2rem', borderRadius: '6px' }">
        <div class="col-12">
            <p class="text-900 font-bold">Contact Links</p>
        </div>
        <div class="col-12 mt-5">
            <div class="grid grid-nogutter px-2 flex-column md:flex-row" :style="{ columnGap: '2rem', rowGap: '2rem' }">
                <a v-for="(item, i) in content" :href="item.link" target="_blank" :data-aos="item.aos" data-aos-easing="linear" data-aos-duration="600" :key="i" class="col flex flex-column justify-content-center text-center align-items-center border-1 surface-border py-5 px-4 border-round contact-hover" style="cursor: pointer;">
                    <i class="pi pi-fw text-2xl text-primary" :class="item.icon"></i>
                    <span class="text-900 font-bold mt-4 mb-1" style="margin-top: 1rem !important;margin-bottom: 0.3rem !important;">{{ item.title }}</span>
                    <span class="text-500">{{ item.info }}</span>
                </a>
            </div>
        </div>

        <div class="col-12 mt-5">
            <p class="text-900 font-bold">Email Details</p>
            <div class="grid flex-column md:flex-row formgrid grid-nogutter mt-6" :style="{ rowGap: '2rem', columnGap: '2rem' }">
                <div class="field col" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                    <label htmlFor="name" class="block text-primary font-bold">Full Name </label>
                    <span class="p-input-icon-left w-full" :style="{ height: '3.5rem' }">
                        <div class="container"></div>
                        <i class="pi pi-user" :style="{ left: '1.5rem' }"></i>
                        <InputText id="name" disabled="true" type="text" v-model="name" placeholder="SIDDIKOV XOJIABAR" class="w-full px-7 text-900 font-semibold" :style="{ height: '3.5rem' }" />
                    </span>
                </div>

                <div class="field col" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
                    <label htmlFor="email" class="block text-primary font-bold"> Email Address </label>
                    <span class="p-input-icon-left w-full" :style="{ height: '3.5rem' }">
                        <i class="pi pi-envelope" :style="{ left: '1.5rem' }"></i>
                        <InputText type="text" v-model="email" disabled="true" placeholder="siddikov.dev2007@gmail.com" class="w-full px-7 text-900 font-semibold" :style="{ height: '3.5rem' }" />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
 .contact-hover:hover {
    transform: scale(1.05, 1.09) !important;
    transition: all 0.3s;
 }
</style>
