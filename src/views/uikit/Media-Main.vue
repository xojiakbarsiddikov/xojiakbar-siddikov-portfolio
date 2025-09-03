<script setup>
import { ProductService } from '@/service/ProductService';
import { PhotoService } from '@/service/PhotoService';
import { ref, onMounted } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import Media  from '../uikit/sport/Media.vue'
import Media2  from '../uikit/sport/Media2.vue'
import Media3  from '../uikit/sport/Media3.vue'

const { contextPath } = useLayout();

const products = ref([]);
const images = ref([]);
const galleriaResponsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '960px',
        numVisible: 4
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);
const carouselResponsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
]);

const productService = new ProductService();
const photoService = new PhotoService();

onMounted(() => {
    productService.getProductsSmall().then((data) => (products.value = data));
    photoService.getImages().then((data) => (images.value = data));
});
</script>

<template>
    <div class="grid p-fluid">
        <div class="col-12">
            <div class="card">
                <h4 style="margin: 0;" class="sport-texts-wrapper">SPORT CERTIFICATES:<span class="blue-color" style="margin-left: 5px;">(GRECO-ROMAN WRESTLING)</span></h4>
                <div class="components mt-3">
                    <Media />
                    <Media2 />
                    <Media3 />
                </div>
            </div>
        </div>

        <div class="col-12">
            <div class="card">
                <h5><span class="blue-color">Medal</span> & <span class="blue-color">Badge</span> Collections</h5>
                <Galleria :value="images" :responsiveOptions="galleriaResponsiveOptions" :numVisible="4" :circular="true" containerStyle="max-width: 800px; margin: auto">
                    <template #item="slotProps">
                        <img :src="contextPath + slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="contextPath + slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 100%; height: 100%; display: block;" />
                    </template>
                </Galleria>
            </div>
        </div>
    </div>
</template>
    
<style lang="scss">
.p-image-preview-indicator {
    height: 99%;
 }
 .my-5 {
    margin-top: 0px !important;
 }
 .img-warp > span > img {
    width: 215px;
    height: 317px;
 }
 .p-2 {
    padding: 2rem;
 }
 #remove_id {
    display: none !important;
    border: none !important;
 }
 .p-galleria-thumbnail-item {
    margin: 3px !important;
 }
 .blue-color {
    color: #6366f1;
 }
 @media screen and (max-width: 700px) {
    .sport-texts-wrapper {
        font-size: 0.8rem;
    }
 }
</style>