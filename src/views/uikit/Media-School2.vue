<script setup>
import { ProductService } from '@/service/ProductService';
import { PhotoService } from '@/service/PhotoService';
import { ref, onMounted } from 'vue';
import { useLayout } from '@/layout/composables/layout';

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
    productService.getProductsSchool2().then((data) => (products.value = data));
});

</script>

<template>
    <Carousel :value="products" :numVisible="3" :numScroll="3" :circular="false" :responsiveOptions="carouselResponsiveOptions">
        <template #item="product">
            <div class="border-round m-2 text-center p-2" style="border: 1px solid var(--surface-d)" :id="product.data.id" :data-aos="product.data.fade" data-aos-easing="linear" data-aos-duration="600">
                <div class="my-5">  
                    <div class="flex justify-content-center img-warp height-warpper" :id="product.data.img_size">
                        <Image :src="contextPath + 'demo/images/certificates/school/' + product.data.image" :alt="product.name" style="box-shadow: none;" class="shadow-42" preview />
                    </div>
                </div>
                <div>
                    <h5 class="mb-1">{{ product.data.name }}</h5>
                </div>
            </div>
        </template>
    </Carousel>
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
 .school-wrapper {
    align-items: center;
    justify-content: space-evenly;
 }
 .blue-color {
    color: #6366f1;
 }
 #removedisplay {
    display: none !important;
 }
 .texts {
    align-items: center;
    justify-content: center;
 } 
 .texts {
    margin: 0 !important;
    padding: 0 !important;
 }
 .texts h5 {
    margin: 0 !important;
    margin-top: 0 !important;
 }
 .third-wrapper {
    border: 1px solid var(--surface-d);
 }
 .third-warpper > span > img {
    width: 293px !important;
    height: 415px !important;
 }
 .img-warp > span > button {
    height: 98% !important; 
 }
 @media screen and (max-width: 600px) {
    .third-warpper {
        display: block !important;
    }
    .third-warpper > span:nth-child(2) > img {
        width: 211px !important;
    }
    .img-warp > span > img {
    width: 215px !important;
    height: 317px !important;
    }
 }
</style>