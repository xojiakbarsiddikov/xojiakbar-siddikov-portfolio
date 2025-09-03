<template>
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600" class="relative overflow-hidden h-22rem bg-primary flex flex-column align-items-center justify-content-center border-round hobby-background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute w-full top-0 left-0" style="display: none;">
            <path
                fill="#0e9d6e"
                fillOpacity="1"
                d="M0,64L48,90.7C96,117,192,171,288,208C384,245,480,267,576,256C672,245,768,203,864,165.3C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
        <div class="animation-main-wrapper flex align-items-center justify-content-around hobby-media" style="width: -webkit-fill-available; z-index: 2;">
         <div class="font-bold text-2xl z-1 line-1 anim-typewriter2 middle-images-wrapper hobby-media-image" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
           <img src="/demo/images/hobbies/real-madrid.png" alt="liverpool-logo">
         </div> 
          <div class="font-bold text-2xl z-1 line-1 anim-typewriter2 middle-images-wrapper hobby-media-image2" data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="600">
           <img src="/demo/images/hobbies/liverpool.png" alt="liverpool-logo">
         </div> 
        </div> 
    </div>
    <div class="col-12" style="padding: 1rem 0;">
        <div class="card">
             <h3 style="text-align: center; color: #001a43; margin: 0;" class="uni-text hobby-text" data-aos="zoom-in-down" data-aos-easing="linear" data-aos-duration="600">Hobbies: <span style="color: var(--red-600);">Playing Football</span> & Letting <span style="color: var(--red-600);">Our Hair-Down</span> with the circle of <span style="color: var(--red-600);">Close Friends</span></h3>
            <div class="container mt-3"  data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="600">
                <div
                v-for="(card, index) in cards"
                :key="index"
                class="panel"
                :class="{ active: activeIndex === index }"
                :style="{ backgroundImage: `url(${card.image})` }"
                @click="setActive(index)"
                >
                </div>
            </div>
        </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cards = [
  {
    title: 'Hello 1',
    image: '/demo/images/hobbies/football1.jpg'
  },
  {
    title: 'Hello 2',
    image: '/demo/images/hobbies/football2.jpg'
  },
  {
    title: 'Hello 3',
    image: '/demo/images/hobbies/gathering.jpg'
  },
  {
    title: 'Hello 5',
    image: '/demo/images/hobbies/football4.jpg'
  },
]

const activeIndex = ref(0)

function setActive(index) {
  activeIndex.value = index
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

.hobby-background {
    background-image: url('/demo/images/hobbies/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.container {
  display: flex;
  width: -webkit-fill-available;
}

.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 65vh;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  transition: flex 0.5s ease-in;
  padding: 30px
}

.panel h2 {
  font-size: 24px;
  position: relative;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

.panel.active {
  flex: 4;
}

.panel.active h2 {
  opacity: 1;
  margin-top: 24px;
}

@media screen and (max-width: 1600px) {
    .panel {
     height: 50vh;
     padding: 10px;
    }
}

@media (max-width: 700px) {
    .hobby-media {
        justify-content: space-between!important;
        align-items: center;
    }
    .hobby-media-image > img {
        width: 180px;
    }
    .hobby-media-image2 > img {
        width: 155px;
    }
    .panel {
        height: 27vh;
        padding: 0px;
    }
    .h-22rem {
        height: 15rem !important;
    }
}

@media (max-width: 600px) {
    .hobby-media-image > img {
        width: 148px;
    }
    .hobby-media-image2 > img {
        width: 145px;
    }
}


@media (max-width: 480px) {
  .container {
    width: -webkit-fill-available;
  }
  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
  .panel {
        height: 18vh;
        padding: 0px;
  }
    .hobby-media-image > img {
        width: 130px;
    }
    .hobby-media-image2 > img {
        width: 120px;
    }
    .hobby-text {
        font-size: 1.2rem;
    }
}
@media (max-width: 420px) {
    .hobby-media-image > img {
        width: 118px;
    }
}
@media (max-width: 400px) {
    .h-22rem {
        height: 11rem !important;
    }
}
</style>
