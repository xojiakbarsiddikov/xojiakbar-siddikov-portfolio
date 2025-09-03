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
    productService.getProductsUniversity3().then((data) => (products.value = data));
    photoService.getImages().then((data) => (images.value = data));
});
</script>

<template>
    <Carousel :value="products" :numVisible="2" :numScroll="2" :circular="false" :responsiveOptions="carouselResponsiveOptions" class="university">
        <template #item="product">
            <div class="border-round m-2 text-center p-2" style="border: 1px solid var(--surface-d); background-color: #0e9d6e; padding: 2rem 0.5rem !important;" :data-aos="product.data.fade" data-aos-easing="linear" data-aos-duration="300">
                <div class="my-5">
                    <div class="flex justify-content-center img-university align-items-center">
                        <Image :src="contextPath + 'demo/images/university/' + product.data.logo" :alt="product.name" :class="product.data.class" style="box-shadow: none; margin-right: 20px;" class="shadow-42 logo"/>
                        <Image :src="contextPath + 'demo/images/university/' + product.data.image" :alt="product.name" style="box-shadow: none;" class="shadow-42" preview />
                    </div>
                </div>
                <div class="flex justify-content-center align-items-center">
                    <h5 class="mb-1 university-text-item" style="margin: 0.5rem 0 1rem 0;">{{ product.data.name }}</h5>
                     <img :src="contextPath + 'demo/images/university/' + product.data.country" :alt="product.data.country_name" width="30" height="30" style="margin-left: 10px">
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
 .img-university > span > img {
    width: 285px;
    height: 390px;
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
 .wartburg-bg > img {
    width: 285px !important;
    height: 140px !important;
 }

 .arizona-state-bg > img {
    width: 265px !important;
    height: 280px !important;
 }

 .unc-bg > img {
    width: 200px!important;
    height: 220px!important;
 }

 .bulgaria-bg > img {
    width: 175px !important;
    height: 270px !important;
 }


 @media screen and (max-width: 1600px) {
    .logo {
        margin: 0!important;
    }
    .wartburg-bg > img {
        width: 250px !important;
        height: 115px !important;
    }
    .arizona-state-bg > img {
        width: 235px !important;
        height: 255px !important;
    }
    .img-university > span > img {
    width: 215px;
    height: 328px;
    }
 }

   @media screen and (max-width: 700px)  {
    .img-university > span > img {
        width: 190px;
        height: 275px;
    }
        .wartburg-bg > img {
        width: 140px !important;
        height: 80px !important;
    }
    .arizona-state-bg > img {
        width: 129px !important;
        height: 189px !important;
    }
    .unc-bg > img {
    width: 105px !important;
    height: 140px !important;
    }
    .bulgaria-bg > img {
    width: 105px !important;
    height: 190px !important;
    }
  }

  @media screen and (max-width: 500px) {
    .wartburg-bg > img {
        width: 110px !important;
        height: 50px !important;
    }
    .arizona-state-bg > img {
        width: 115px !important;
        height: 165px !important;
    }
    .unc-bg > img {
        width: 95px !important;
        height: 120px !important;
    }
    .bulgaria-bg > img {
        width: 95px !important;
        height: 160px !important;
    }
    .university-text-item {
        font-size: 1rem;
    }
  }

  @media screen and (max-width: 480px) {
    .wartburg-bg > img {
        width: 90px !important;
        height: 50px !important;
    }
    .arizona-state-bg > img {
        width: 80px !important;
        height: 120px !important;
    }
    .unc-bg > img {
        width: 60px !important;
        height: 75px !important;
    }
    .university-text-item {
        font-size: 0.8rem;
    }
    .bulgaria-bg > img {
        width: 55px !important;
        height: 125px !important;
    }
  }

    @media screen and (max-width: 450px) {
    .img-university > span > img {
        width: 155px;
        height: 230px;
    }
  } 
  
  @media screen and (max-width: 460px) {
    .img-university > span > img {
        width: 124px;
        height: 190px;
    }
  } 

   @media screen and (max-width: 390px) {
    .wartburg-bg > img {
        width: 65px !important;
        height: 40px !important;
    }
    .arizona-state-bg > img {
        width: 60px !important;
        height: 85px !important;
    }
    .unc-bg > img {
        width: 45px !important;
        height: 60px !important;
    }
    .bulgaria-bg > img {
        margin-right: 9px;
    }
   }
</style>