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
    productService.getProductsUniversity2().then((data) => (products.value = data));
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
 .marquette-bg > img {
     width: 200px !important;
    height: 217px !important;
    margin-right: 20px;
 }

.thomas-jefferson-bg > img {
    width: 285px!important;
    height: 250px!important;
}

.georgia-state-university-bg > img {
    width: 280px !important;
    height: 275px !important;
}

.keiser-logo-bg > img {
    width: 262px !important;
    height: 175px !important;
    margin-right: 20px;
}

 @media screen and (max-width: 1600px) {
    .logo {
        margin: 0!important;
    }
    .georgia-state-university-bg > img {
      width: 223px!important;
      height: 250px!important;
    }
    .bulgaria-bg > img {
    width: 140px !important;
    height: 250px !important;
    margin-right: 20px;
    }
    .unc-bg > img {
    width: 185px !important;
    height: 200px !important;
    margin-right: 20px;
}
    .keiser-logo-bg > img {
      width: 215px!important;
      height: 166px!important;
      margin-right: 20px;
    }
    .img-university > span > img {
    width: 215px;
    height: 328px;
    }
    .thomas-jefferson-bg > img {
    width: 285px!important;
    height: 250px!important;
    }
 }

   @media screen and (max-width: 700px)  {
    .thomas-jefferson-bg > img {
        width: 110px !important;
        height: 130px !important;
        margin-right: 20px;
    }
    .keiser-logo-bg > img {
        width: 118px !important;
        height: 110px !important;
        margin-right: 20px;
    }
     .uni-container {
        padding: 2rem 6rem !important;
    }
    .img-university > span > img {
        width: 190px;
        height: 275px;
    }
    .georgia-state-university-bg > img {
        width: 125px !important;
        height: 170px !important;
    }
     .marquette-bg > img {
       width: 100px !important;
       height: 123px !important;
       margin-right: 20px;
    }
  }

  @media screen and (max-width: 500px) {
    .img-university > span > img {
        width: 190px;
        height: 260px;
    }
    .thomas-jefferson-bg > img {
        width: 90px !important;
        height: 90px !important;
        margin-right: 20px;
    }
    .university-text-item {
        font-size: 1rem;
    }
    .university-text-item {
        font-size: 1rem;
    }
    .georgia-state-university-bg > img {
        width: 113px !important;
        height: 140px !important;
    }
    .keiser-logo-bg > img {
        width: 95px !important;
        height: 93px !important;
        margin-right: 20px;
    }
  } 

   @media screen and (max-width: 480px) {
    .marquette-bg > img {
        width: 65px !important;
        height: 85px !important;
        margin-right: 20px;
    }
    .thomas-jefferson-bg > img {
        width: 63px !important;
        height: 65px !important;
        margin-right: 20px;
    }
    .georgia-state-university-bg > img {
        width: 85px !important;
        height: 100px !important;
    }
    .keiser-logo-bg > img {
        width: 65px !important;
        height: 63px !important;
        margin-right: 20px;
    }
   }
  
  @media screen and (max-width: 460px) {
    .img-university > span > img {
        width: 124px;
        height: 190px;
    }
  } 

   @media screen and (max-width: 390px) {
    .thomas-jefferson-bg > img {
        width: 45px !important;
        height: 45px !important;
        margin-right: 3px;
    }
    .marquette-bg > img {
        width: 50px !important;
        height: 60px !important;
        margin-right: 10px;
    }
    .georgia-state-university-bg > img {
        width: 58px !important;
        height: 75px !important;
    }
    .keiser-logo-bg > img {
        width: 57px !important;
        height: 53px !important;
        margin-right: 7px;
    }
   }
</style>