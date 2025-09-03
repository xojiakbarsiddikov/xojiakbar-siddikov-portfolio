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
    productService.getProductsUniversity1().then((data) => (products.value = data));
    photoService.getImages().then((data) => (images.value = data));
});
</script>

<template>
    <Carousel :value="products" :numVisible="2" :numScroll="2" :circular="false" :responsiveOptions="carouselResponsiveOptions" class="university">
        <template #item="product">
            <div class="border-round m-2 text-center p-2 uni-container" style="border: 1px solid var(--surface-d); background-color: #0e9d6e; padding: 2rem 0.5rem !important;" :data-aos="product.data.fade" data-aos-easing="linear" data-aos-duration="300">
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
 .tmc-academy-bg > img {
    width: 188px !important;
    height: 300px !important;
    margin-right: 20px;
 }

 .uni-arizona-bg > img {
    width: 200px!important;
    height: 237px !important;
    margin-right: 20px;
 }

 .uva-wise-bg > img {
    width: 281px !important;
    height: 136px !important;
    margin-right: 20px;
}

 .saint-louis-bg > img {
    width: 290px !important;
    height: 263px !important;
    margin-right: 20px;
}

 @media screen and (max-width: 1600px) {
    .logo {
        margin: 0!important;
    }
    .img-university > span > img {
    width: 215px;
    height: 328px;
    }
    .uva-wise-bg > img {
        width: 197px !important;
        height: 120px !important;
    } 
 .saint-louis-bg > img {
        width: 203px !important;
        height: 190px !important;
    }
 }

  @media screen and (max-width: 700px)  {
    .podium {
        margin: 30px 0;
    }
    .uni-container {
        padding: 2rem 6rem !important;
    }
    .tmc-academy-bg > img {
        width: 100px !important;
        height: 190px !important;
    }
    .img-university > span > img {
        width: 190px;
        height: 275px;
    }
    .uni-arizona-bg > img {
        width: 100px !important;
        height: 135px !important;
    }
    .uva-wise-bg > img {
        width: 100px !important;
        height: 50px !important;
    }
    .saint-louis-bg > img {
        width: 100px !important;
        height: 135px !important;
    }
  }

  
  @media screen and (max-width: 490px) {
    .img-university > span > img {
        width: 155px;
        height: 230px;
    }
    .tmc-academy-bg > img {
        width: 50px !important;
        height: 115px !important;
    }
    .uni-arizona-bg > img {
        width: 50px !important;
        height: 75px !important;
    }
    .uva-wise-bg > img {
        width: 50px !important;
        height: 22px !important;
    }
    .saint-louis-bg > img {
        width: 50px !important;
        height: 65px !important;
    }
    .university-text-item {
        font-size: 1rem;
    }
  } 
  
  @media screen and (max-width: 460px) {
    .img-university > span > img {
        width: 124px;
        height: 190px;
    }
  } 
  
   @media screen and (max-width: 390px) {
    .tmc-academy-bg > img {
      margin-right: 8px;
    }
    .uni-arizona-bg > img {
        margin-right: 8px;
    }
    .uva-wise-bg > img {
        width: 55px !important;
        height: 35px !important;
        margin-right: 7px;
    }
    .saint-louis-bg > img {
        margin-right: 7px;
    }
   }
</style>