<script setup>
import { ProductService } from '@/service/ProductService';
import { PhotoService } from '@/service/PhotoServiceUni';
import { ref, onMounted } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import Media  from './university/Media.vue'
import Media2  from './university/Media2.vue'
import Media3  from './university/Media3.vue'

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
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800" class="relative overflow-hidden h-20rem bg-primary flex flex-column align-items-center justify-content-center border-round" style="background-color: #10b981 !important; margin-bottom: 1rem !important;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute w-full top-0 left-0">
            <path
                fill="#0e9d6e"
                fillOpacity="1"
                d="M0,64L48,90.7C96,117,192,171,288,208C384,245,480,267,576,256C672,245,768,203,864,165.3C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
        <div class="animation-main-wrapper uni-flex">
         <div class="font-bold text-2xl z-1 line-1 anim-typewriter1 uni-img1" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
            <img src="/demo/images/university/common-app-logo.png" alt="common-app">
         </div>
          <div class="font-bold text-2xl z-1 line-1 anim-typewriter1 uni-img1" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="600">
            <img src="/demo/images/university/mirai-logo.png" alt="common-app">
         </div>
         <div class="font-bold text-2xl z-1 line-1 anim-typewriter2 uni-img" data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="600">
            <img src="/demo/images/university/accepted-universities.png" alt="accepted-universities-list">
         </div> 
        </div> 
    </div>
    <div class="grid p-fluid" >
        <div class="col-12">
            <div class="card">
                <h3 style="text-align: center;" class="uni-text" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600"><span style="margin-left: 5px; color: #0e9d6e;">Acceptence Letters</span> from<span style="margin-left: 5px; color: #0e9d6e;">Universities</span> around <span style="color: #0e9d6e;">the globe</span></h3>
                <div class="podium-wrapper">
                    <div class="podium">
                     <img src="/demo/images/university/podium.jpg" alt="podium" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
                    </div>
                </div>
                <Media />
                <Media3 />
                <Media2 />
            </div>
        </div>
        <div class="col-12">
            <div class="card">
                <h5 class="university-text-item"><span style="color: #10b981;">Classmates</span> at University <span style="color: #10b981;">&</span> Circle of <span style="color: #10b981;">Close Friends</span></h5>
                <Galleria :value="images" :responsiveOptions="galleriaResponsiveOptions" :numVisible="3" :circular="true" containerStyle="max-width: 800px; margin: auto;     background: #10b981; padding: 15px; border-radius: 3px;">
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
 .uni-flex {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
 }

 .podium-wrapper {
    text-align: center;
 }

 .podium > img {
    width: 700px;
 }

 @media screen and (max-width: 700px) {
    .uni-img1 > img {
        height: 90px;
    }
    .uni-flex {
        display: block;
        text-align: center;
        padding: 0 30px;
    }
    .uni-img {
        overflow: hidden;
    }
    .uni-img > img {
        width: 270px;
    }
    .podium > img {
        width: -webkit-fill-available!important;
    }
    .arizona {
        margin: 96px 0 0 -165px;
        width: 93px;
    }
    .tmc-academy {
        width: 70px;
        margin: 30px 0 0 -33px;
    }
    .uva-wise {
        margin: 106px 0 0 47px;
        width: 165px;
    }
    .uni-text {
        font-size: 1rem;
    }
 }
 @media screen and (max-width: 380px) {
    .uni-img > img {
        width: 205px;
    }
}
</style>