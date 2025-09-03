<script setup>
import { ref, onMounted } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { PhotoService } from '@/service/PhotoServiceSP';
import { PhotoService2 } from '@/service/PhotoServiceAC';
import { PhotoService3 } from '@/service/PhotoServiceMT';

const { contextPath } = useLayout();
const images = ref([]);
const images2 = ref([]);
const images3 = ref([]);

const customEvents = ref([
    {
        status: 'Speaking Club Organizer',
        date_start: '25/05/2024',
        date_end: "01/09/2024",
        color: 'var(--primary-color)',
        image: 'game-controller.jpg',
        number: "1",
        aos: "fade-right",
        image: images,
        text: "I had the privilege of being one of the organizers of a 'Speaking Club' at the Andijan Development Center, an initiative that I, along with my friends, established to provide extra tutoring for students studying English. This activity was designed to help students improve their language skills through individual coaching sessions and by sharing our own experiences. We organized a wide range of activities, including engaging presentations, thought-provoking debates, and various speaking exercises, all aimed at enhancing students' fluency and confidence."
    },
    {
        status: 'Support Teacher',
        date_start: '10/03/2025',
        date_end: "10/06/2024",
        color: 'var(--primary-color)',
        number: "2",
        aos: "fade-right",
        image: images2,
        text: "I officially began my teaching career at Mavr School, one of the most prestigious education centers in my hometown, specializing in preparing 3rd and 4th grade students for the Presidential School entrance exams. I started my journey as an academic support staff and teacher assistant, an experience I consider one of the most rewarding moments of my life.In this role, I had the privilege of working closely with both colleagues and young students. Building strong relationships with my team allowed me to further develop my teamwork and collaboration skills, while daily interactions with students strengthened my teaching and communication abilities. After three months of dedication and growth, I was promoted to the position of main teacher, where I continued to nurture and guide students in their academic journey."
    },
    {
        status: 'Main Teacher',
        date_start: '10/06/2025',
        date_end: "10/07/2025",
        color: 'var(--primary-color)',
        number: "3",
        aos: "fade-right",
        image: images3,
        text: "After three months, I advanced to the role of main teacher at Mavr School, which brought greater responsibility as we approached the Presidential School entrance exams. I led three groups with more than 25 students in total, focusing on Reading and Grammar while also guiding them in time management and exam strategies. As the pressure increased, I balanced intensive lessons with motivational talks and relaxing activities, such as movie sessions, to keep students both mentally and physically prepared. Over the course of a month and a half, I dedicated myself to ensuring they were ready, and their strong performance in the exams made this one of the most rewarding and unforgettable moments of my teaching career."
    },
]);

const customVideos = ref([
    {
        link: './demo/images/working/teaching/teaching2.mp4',
        aos: 'fade-right'
    },
    {
        link: './demo/images/working/teaching/teaching7.mp4',
        aos: 'fade-left'
    },
    {
        link: './demo/images/working/teaching/teaching1.mp4',
        aos: 'fade-down'
    },
    {
        link: './demo/images/working/teaching/teaching5.mp4',
        aos: 'fade-left'
    },
    {
        link: './demo/images/working/teaching/teaching6.mp4',
        aos: 'fade-right'
    },
       {
        link: './demo/images/working/teaching/teaching4.mp4',
        aos: 'fade-down'
    },
    {
        link: './demo/images/working/teaching/teaching3.mp4',
        aos: 'fade-left'
    },
])


const horizontalEvents = ref(['2020', '2021', '2022', '2023']);
const galleriaResponsiveOptions = ref(
    [
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
   ],

);
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


const photoService = new PhotoService();
const photoService2 = new PhotoService2();
const photoService3 = new PhotoService3();

onMounted(() => {
    photoService.getImages().then((data) => (images.value = data));
    photoService2.getImages().then((data) => (images2.value = data));
    photoService3.getImages().then((data) => (images3.value = data));
});

</script>

<template>
     <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600" class="relative overflow-hidden h-20rem bg-primary flex flex-column align-items-center justify-content-center border-round" style="margin-bottom: 3rem !important;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute w-full top-0 left-0">
            <path
                fill="var(--primary-600)"
                fillOpacity="1"
                d="M0,64L48,90.7C96,117,192,171,288,208C384,245,480,267,576,256C672,245,768,203,864,165.3C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
       <div class="animation-main-wrapper uni-flex teaching-flex-media">
         <div class="font-bold text-2xl z-1 line-1 anim-typewriter1 uni-img1 teaching-media-img" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
            <img src="/demo/images/working/teaching/speaking-club-logo2.jpg" alt="speaking-club-logo">
         </div>
          <div class="font-bold text-2xl z-1 line-1 anim-typewriter1 uni-img1 teaching-media-img" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="600"> 
            <img src="/demo/images/working/teaching/adc-logo.jpg" alt="adc-logo">
         </div>
         <div class="font-bold text-2xl z-1 line-1 anim-typewriter2 uni-img1 teaching-media-img" data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="600">
            <img src="/demo/images/working/teaching/mavr-logo.jpg" alt="mavr-logo">
         </div> 
        </div> 
    </div>
    <div class="card teaching-wrapper">
        <div class="header-text-wrapper" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
         <h4>Step <span class="blue-color">by</span> Step <span class="blue-color">Journey</span> of <span class="blue-color">"English Teaching"</span> (9 months)</h4>
        <h4>The process of Climbing up the <span class="blue-color">Career Ladder</span></h4>
        </div>
        <Timeline :value="customEvents" align="alternate" class="customized-timeline">
            <template #marker="slotProps">
                <span class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-2" :style="{ backgroundColor: slotProps.item.color }">
                    <span>{{ slotProps.item.number }}</span>
                    <i :class="slotProps.item.icon"></i>
                </span>
            </template>
            <template #content="slotProps">
                <Card :data-aos="slotProps.item.aos" data-aos-easing="linear" data-aos-duration="800">
                    <template #title>
                        <div class="header-text-wrapper flex justify-content-between align-items-center">
                            <h4 style="margin: 0;" class="white-color">
                             {{ slotProps.item.status }}
                            </h4>
                            <h4 class="black-color" style="margin: 0">from  <span class="white-color"> {{ slotProps.item.date_start }} </span> till <span class="white-color"> {{ slotProps.item.date_end }} </span></h4>
                        </div>
                    </template>
                    <template #content>
                        <Galleria :value="slotProps.item.image" :responsiveOptions="galleriaResponsiveOptions" :numVisible="4" :circular="true" containerStyle="max-width: 530px; margin: auto; background: #fff; padding: 10px; border-radius: 3px;">
                            <template #item="slotProps">
                                <img :src="contextPath + slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                            </template>
                            <template #thumbnail="slotProps">
                                <img :src="contextPath + slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                            </template>
                        </Galleria>
                        <!-- <img v-if="slotProps.item.image" :src="contextPath + 'demo/images/product/' + slotProps.item.image" :alt="slotProps.item.name" width="200" class="shadow-2 mb-3" /> -->
                        <Fieldset legend="Career Path" :toggleable="true" style="margin-top: 17px;" >
                            <p class="line-height-3 m-0">
                                {{ slotProps.item.text }}
                            </p>
                        </Fieldset>
                    </template>
                </Card>
            </template>
        </Timeline>
        <div class="middle-video" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
         <iframe width="700" height="500" src="https://www.youtube.com/embed/j2B1DqF9WjQ?si=0f2KmRngTRrHVGO5"></iframe>
        </div>
        <div class="opposite-video">
            <div class="text-video" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
                <i class="pi pi-angle-double-down"></i>
                <h1 class="teaching-h1">Lesson Footage</h1>
                <i class="pi pi-angle-double-down"></i>
            </div>
            <div class="videos">
                 <Carousel :value="customVideos" :numVisible="3" :numScroll="3" :circular="false" :responsiveOptions="carouselResponsiveOptions">
                    <template #item="product">
                        <div class="border-round m-2 text-center p-2" style="border: 1px solid var(--surface-d)" :data-aos="product.data.aos">
                            <div class="my-5">
                                <video width="370" height="260" :src="product.data.link" controls style="cursor: pointer;">
                                </video>
                            </div>
                        </div>
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row !important;

            .p-timeline-event-content {
                text-align: left !important;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }

        .p-card {
            margin-top: 1rem;
        }
    }
}
.p-card {
    background-color: var(--primary-color);
}
.uni-flex {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
 }
.white-color {
    color: #fff;
}
.black-color {
    color: #212121;
}
.teaching-wrapper {
    padding: 0.5rem 2rem!important;
}
.header-text-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.blue-color {
    color: #6366f1;
}
.opposite-video {
    text-align: center;
}
.text-video {
    display: flex;
    justify-content: center;
    align-items: center;
}
.text-video > i {
    margin: 0 4px;
    font-size: 30px;
    color: var(--primary-color);
    margin-top: 7px;
}
.middle-video {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}

.uni-img1 > img {
    border-radius: 20px;
}

@media screen and (max-width: 1600px) {
    video {
        width: 290px !important;
    }
    .header-text-wrapper > h4 {
        font-size: 1.2rem;
    }
}

@media screen and (max-width: 600px) {
    video {
        width: 195px !important;
    }
    iframe {
        height: 395px !important;
    }
    .teaching-h1 {
        font-size: 2rem;
    }
}

@media screen and (max-width: 550px) {
    video {
        width: 250px!important;
    }
    .teaching-flex-media {
        display: grid;
        grid-template-columns: auto auto;
        row-gap: 20px;
    }
    .teaching-media-img > img {
        width: 115px;
    }
}

@media screen and (max-width: 450px) {
    video {
        width: 218px !important;
    }
    iframe {
        height: 227px!important;
    }
}

@media screen and (max-width: 400px) {
    video {
        width: 200px !important;
    }
}

@media screen and (max-width: 380px) {
    video {
        width: 165px !important;
    }
}
</style>
