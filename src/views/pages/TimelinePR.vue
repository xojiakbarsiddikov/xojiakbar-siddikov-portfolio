<script setup>
import { ref, onMounted } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { PhotoService } from '@/service/PhotoServiceFR';
import { PhotoService2 } from '@/service/PhotoServiceJH';
import { PhotoService3 } from '@/service/PhotoServiceFD';
import { PhotoService4 } from '@/service/PhotoServiceTeam';

const { contextPath } = useLayout();
const images = ref([]);
const images2 = ref([]);
const images3 = ref([]);
const images4 = ref([]);

const customEvents = ref([
    {
        status: 'Freelancer',
        date_start: 'Over 1 year',
        color: 'var(--red-600)',
        image: 'game-controller.jpg',
        number: "1",
        aos: "fade-right",
        image: images,
        text: "After completing multiple courses in programming and digital tools such as Word, Excel, HTML, CSS, and JavaScript, I began exploring freelance opportunities on the Workzilla platform. At first, it was challenging to communicate with clients and meet their expectations while continuing to develop my technical skills. However, over the course of a year, I successfully completed various projects that not only provided income but also helped me gain valuable experience. Through this journey, I significantly improved my problem-solving abilities and strengthened my communication skills with clients."
    },
    {
        status: 'Job-Hunting Process',
        date_start: 'Over 5 months',
        color: 'var(--red-600)',
        number: "2",
        aos: "fade-right",
        image: images2,
        text: "Having gained initial freelance experience, I became eager to explore opportunities with established companies through the HeadHunter platform. Inspired by my teachers, who were successfully working with international companies online, I decided to follow a similar path. During this process, I experienced both rejections and acceptances, which led me to several Zoom-based job interviews. Although many interviews resulted in rejection, each experience gave me valuable insight into the hiring process and pushed me to grow. I worked on improving my English language proficiency, strengthening my technical skills, and preparing myself more effectively—both mentally and professionally — for future opportunities."
    },
    {
        status: 'Frontend Developer at "LUXUS Company"',
        date_start: 'Over 2 months',
        color: 'var(--red-600)',
        number: "3",
        aos: "fade-right",
        image: images3,
        text: "After months of searching and overcoming challenges, I was offered an opportunity with a company based in Argentina. I successfully passed the interviews and job tasks, and began working as a Frontend Developer at the age of 16. This experience was very different from freelancing, as I had the chance to work in a structured team environment alongside a backend developer and a team leader. We held regular meetings, collaborated on tasks, and I gained valuable insight into professional teamwork. The role came with a decent salary for my age, and it lasted for about two months until the project was completed. Afterward, I continued to explore new opportunities while focusing on learning emerging technologies that were in high demand in the programming market."
    }
]);



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

 const src = './demo/images/working/programming/team-video.MOV'
 const type = 'video/MOV'


const photoService = new PhotoService();
const photoService2 = new PhotoService2();
const photoService3 = new PhotoService3();
const photoService4 = new PhotoService4();

onMounted(() => {
    photoService.getImages().then((data) => (images.value = data));
    photoService2.getImages().then((data) => (images2.value = data));
    photoService3.getImages().then((data) => (images3.value = data));
    photoService4.getImages().then((data) => (images4.value = data));
});

</script>

<template>
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600" class="relative overflow-hidden h-20rem bg-primary flex flex-column align-items-center justify-content-center border-round" style="    background-color: var(--red-600) !important; margin-bottom: 1rem !important;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute w-full top-0 left-0">
            <path
                fill="var(--red-700)"
                fillOpacity="1"
                d="M0,64L48,90.7C96,117,192,171,288,208C384,245,480,267,576,256C672,245,768,203,864,165.3C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
        <div class="animation-main-wrapper uni-flex">
         <div class="font-bold text-2xl z-1 line-1 anim-typewriter1 uni-img1" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="600">
            <img src="/demo/images/working/programming/freelance-logo.png" alt="workzilla-logo">
         </div>
         <div class="font-bold text-2xl z-1 line-1 anim-typewriter1 uni-img1" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="600">
            <img src="/demo/images/working/programming/kwork-logo.png" alt="kwork-logo">
         </div>
          <div class="font-bold text-2xl z-1 line-1 anim-typewriter1 uni-img1" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="600">
            <img src="/demo/images/working/programming/acode-logo.png" alt="acode-logo">
         </div>
         <div class="font-bold text-2xl z-1 line-1 anim-typewriter2 uni-img1" data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="600">
            <img src="/demo/images/working/programming/hh-logo.png" alt="head-hunter-logo">
         </div> 
        </div> 
    </div>
    <div class="card programming-wrapper">
        <div class="header-text-wrapper" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
         <h4>Step <span class="red-color">by</span> Step <span class="red-color">Journey</span> of <span class="red-color">Working</span> as a <span class="red-color">"Freelancer <span style="color: #212121;">&</span> Frontend Developer"</span> (1.5 years)</h4>
        <h4>The process of Climbing up the <span class="red-color">Career Ladder</span></h4>
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
                            <h4 class="white-color" style="margin: 0;">
                                {{ slotProps.item.status }}        
                            </h4>
                            <h4 class="white-color" style="margin: 0 0;">{{ slotProps.item.date_start }}</h4>
                        </div>
                    </template>
                    <template #content>
                        <Galleria :value="slotProps.item.image" :responsiveOptions="galleriaResponsiveOptions" :numVisible="4" :circular="true" containerStyle="max-width: 530px; margin: auto; background: #fff; padding: 10px;">
                            <template #item="slotProps">
                                <img :src="contextPath + slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                            </template>
                            <template #thumbnail="slotProps">
                                <img :src="contextPath + slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                            </template>
                        </Galleria>
                        <!-- <img v-if="slotProps.item.image" :src="contextPath + 'demo/images/product/' + slotProps.item.image" :alt="slotProps.item.name" width="200" class="shadow-2 mb-3" /> -->
                        <Fieldset legend="Career Path" class="background" :toggleable="true" style="margin-top: 17px;" >
                            <p class="line-height-3 m-0 black-color">
                                {{ slotProps.item.text }}
                            </p>
                        </Fieldset>
                    </template>
                </Card>
            </template>
        </Timeline>
        <div class="opposite-video">
            <div class="text-video" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
                <i class="pi pi-angle-double-down"></i>
                <h1 style="margin-bottom: 0;">Our Team's Footage</h1>
                <i class="pi pi-angle-double-down"></i>
            </div>
            <div class="uni-img1" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600" style="margin-top: 10px;">
             <img src="/demo/images/working/programming/acode-logo-small.png" alt="acode-logo">
            </div>
              <div class="col-12">
            <div class="card flex align-items-center justify-content-evenly team-wrapper" style="background-color: #d9342b;">
                <Galleria :value="images4" :responsiveOptions="galleriaResponsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 700px;     background: #fff; padding: 10px; border-radius: 3px;">
                    <template #item="slotProps">
                        <img :src="contextPath + slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                    </template>
                    <template #thumbnail="slotProps">
                        <img :src="contextPath + slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 100%; height: 100%; display: block;" />
                    </template>
                </Galleria>
                <div class="video-media-wrapper">
                 <video style="background: #fff; padding: 10px; border-radius: 3px; cursor: pointer;" :key="src" controls width="350" class="team-video">
                    <source :src="src">
                 </video>
                </div>
            </div>
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
    background-color: var(--red-600);
}
.programming-wrapper {
    padding: 0.5rem 2rem!important;
}
.black-color {
    color: #212121;
} 
.white-color {
    color: #fff;
}
.uni-flex {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
 }
.header-text-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.red-color {
    color: #d9342b;
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
    color: #d9342b;
    margin-top: 18px;
}
.middle-video {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}

.p-carousel-indicator > button.p-ink {
    background: var(red-600) !important;
}

@media screen and (max-width: 1600px) {
    .team-video {
        width: 290px !important;
    }
    .header-text-wrapper > h4 {
        font-size: 1.2rem;
    }
}

@media screen and (max-width: 700px) {
    .team-wrapper {
        display: inline-block!important;
        padding: 10px 0;
    }
    .uni-img1 > img {
        width: 110px;
    }
    .team-video {
        width: revert-layer !important;
        margin-top: 25px;
    }
    .programming-wrapper {
        padding: 0!important;
    }
    .team-wrapper > .p-galleria {
        margin: 10px;
    }
    .col-12 {
        padding: 0;
    }
    .text-video > h1 {
        font-size: 2rem;
    }
    .uni-flex {
        display: grid;
        grid-template-columns: auto auto;
        text-align: center;
        align-items: center;
    }
    .header-text-wrapper > h4 {
        font-size: 1rem;
    }
    .header-text-wrapper {
        text-align: center;
    }
}
@media screen and (max-width: 500px) {
   .text-video > h1 {
        font-size: 1.5rem;
    }  
    .team-wrapper {
            width: -webkit-fill-available;
    }
}
@media screen and (max-width: 400px) {
    .team-video {
            width: -webkit-fill-available!important;
    }
}
</style>
