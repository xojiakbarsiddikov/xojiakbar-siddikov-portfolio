<script setup>
import { ProductService } from '@/service/ProductService';
import { ref, onMounted } from 'vue';
import { useLayout } from '@/layout/composables/layout';

const { contextPath } = useLayout();

const products = ref([]);
const products2 = ref([]);
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

onMounted(() => {
    productService.getProductsWP1().then((data) => (products.value = data));
    productService.getProductsWP2().then((data) => (products2.value = data));
});
</script>

<template>
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600" class="relative wp-media overflow-hidden h-20rem bg-primary flex flex-column align-items-center justify-content-center border-round" style="background-color: #3b82f6!important;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute w-full top-0 left-0">
            <path
                fill="#326fd1"
                fillOpacity="1"
                d="M0,64L48,90.7C96,117,192,171,288,208C384,245,480,267,576,256C672,245,768,203,864,165.3C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
       <div class="animation-main-wrapper uni-flex">
        <div class="font-bold text-2xl z-1 line-1 anim-typewriter1 middle-image-wrapper" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="600">
            <a href="https://app.netlify.com/teams/xojiakbarsiddikov/projects" target="_blank" style="cursor: pointer;">
                <img src="/demo/images/working/programming/web-projects/netlify.png" class="netlify-img" alt="netlify-logo">
            </a>
         </div>
         <div class="font-bold text-2xl z-1 line-1 anim-typewriter1 middle-image-wrapper" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
            <img src="/demo/images/working/programming/web-projects/html.png" alt="html-logo">
         </div>
          <div class="font-bold text-2xl z-1 line-1 anim-typewriter1 middle-image-wrapper" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="600">
            <img src="/demo/images/working/programming/web-projects/css.png" alt="css-logo">
         </div>
         <div class="font-bold text-2xl z-1 line-1 anim-typewriter2 middle-image-wrapper" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
           <img src="/demo/images/working/programming/web-projects/js.png" class="js-img" alt="js-logo">
         </div> 
          <div class="font-bold text-2xl z-1 line-1 anim-typewriter2 middle-image-wrapper" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="600">
           <img src="/demo/images/working/programming/web-projects/vue.png" alt="js-logo">
         </div> 
        </div> 
    </div>
    <div class="col-12" style="padding: 1rem 0;">
            <div class="card">
                <h3 style="text-align: center;" class="uni-text wp-h3" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">Web Projects created on: <span style="color: var(--orange-500);">HTML</span> & <span style="color: #3b82f6;">CSS</span> & <span style="color: var(--yellow-400);">JAVASCRIPT</span> & <span style="color: var(--green-600);">VUE JS</span></h3>
                <Carousel :value="products" :numVisible="3" :numScroll="3" :circular="false" :responsiveOptions="carouselResponsiveOptions" class="web-projects">
                    <template #item="product">
                        <div class="border-round m-2 text-center p-3" style="border: 1px solid var(--surface-d); background-color: #3b82f6;" :data-aos="product.data.fade" data-aos-easing="linear" data-aos-duration="600">
                            <div class="my-5">
                                <div class="flex justify-content-center img-warp-web">
                                    <Image :src="contextPath + 'demo/images/working/programming/web-projects/' + product.data.image" :alt="product.name" style="box-shadow: none;" class="shadow-42" preview />
                                </div>
                            </div>
                            <div class="web-projects-text">
                                <h3 class="wp-h3">"{{ product.data.name }}"</h3>
                                <a :href="product.data.link" target="_blank">Link</a>
                            </div>
                        </div>
                    </template>
                </Carousel>
                <Carousel :value="products2" :numVisible="3" :numScroll="3" :circular="false" :responsiveOptions="carouselResponsiveOptions" class="web-projects">
                    <template #item="product">
                        <div class="border-round m-2 text-center p-3" style="border: 1px solid var(--surface-d); background-color: #3b82f6;" :data-aos="product.data.fade">
                            <div class="my-5">
                                <div class="flex justify-content-center img-warp-web">
                                    <Image :src="contextPath + 'demo/images/working/programming/web-projects/' + product.data.image" :alt="product.name" style="box-shadow: none;" class="shadow-42" preview />
                                </div>
                            </div>
                            <div class="web-projects-text">
                                <h3 class="wp-h3">"{{ product.data.name }}"</h3>
                                <a :href="product.data.link" target="_blank">Link</a>
                            </div>
                        </div>
                    </template>
                </Carousel>
         </div>
    </div>
</template>
    
<style lang="scss">
.p-image-preview-indicator {
    height: 99%;
 }
 .uni-flex {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
 }
 .middle-image-wrapper > img {
    width: 155px;
 }
 .web-projects-text > a {
    cursor: pointer;
    color: #fff;
    font-size: 1.5rem;
    letter-spacing: 0.7px;
 }
 .web-projects-text > a:hover {
    transition: 0.2s;
    color: var(--red-700);
 }
 .js-img {
    width: 175px!important;
 }
 .netlify-img {
    width: 200px!important;
 }
 .my-5 {
    margin-top: 0px !important;
 }
 .img-warp-web > span > img {
    width: 100%;
    height: 320px;
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

 @media screen and (max-width: 1600px) {
    .img-warp-web > span > img {
        width: 100%;
        height: 235px;
    }
 }

  @media screen and (max-width: 700px)  {
    .wp-h3,
    .web-projects-text > a {
        font-size: 1.2rem;
    }
    .uni-flex {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: center;
        text-align: center;
        align-items: flex-start;
        column-gap: 10px;
        row-gap: 20px;
    }
    .middle-image-wrapper > img {
    width: 85px;
    }
    .js-img {
    width: 122px !important;
    }
    .wp-media {
    height: 27rem !important;   
    }
  }

    @media screen and (max-width: 400px)  {
        .netlify-img {
         width: 135px !important;
        }
        .middle-image-wrapper > img {
            width: 65px;
        }
         .img-warp-web > span > img {
            width: 100%;
            height: 125px;
        }
        .js-img {
            width: 97px !important;
        }
    }
</style>