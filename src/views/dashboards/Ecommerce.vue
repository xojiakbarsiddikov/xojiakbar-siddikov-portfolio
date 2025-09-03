<script setup>
import { onMounted, ref, watch } from 'vue';
import { ProductService } from '@/service/ProductService';
import { FilterMatchMode } from 'primevue/api';
import { useLayout } from '@/layout/composables/layout';

const { contextPath, layoutConfig } = useLayout();
const knobValue = ref(90);
const products = ref([]);
const weeks = ref([
    {
        label: 'Last Week',
        value: 0,
        data: [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ]
    },
    {
        label: 'This Week',
        value: 1,
        data: [
            [35, 19, 40, 61, 16, 55, 30],
            [48, 78, 10, 29, 76, 77, 10]
        ]
    }
]);
const selectedWeek = ref(weeks.value[0]);
const pieOptions = ref({});
const barOptions = ref({});
const barData = ref({});
const pieData = ref({});
const salesTableRef = ref(null);
const filterSalesTable = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});

onMounted(() => {
    const productService = new ProductService();
    productService.getProductsSmall().then((data) => (products.value = data));
    selectedWeek.value = weeks.value[0];
    setChartData();
});
watch(layoutConfig.colorScheme, () => {
    setChartData();
});
const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    pieData.value = {
        labels: ['Electronics', 'Fashion', 'Household'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [documentStyle.getPropertyValue('--primary-700'), documentStyle.getPropertyValue('--primary-400'), documentStyle.getPropertyValue('--primary-100')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--primary-600'), documentStyle.getPropertyValue('--primary-300'), documentStyle.getPropertyValue('--primary-200')]
            }
        ]
    };

    pieOptions.value = {
        animation: {
            duration: 0
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: textColor,
                    usePointStyle: true,
                    font: {
                        weight: 700
                    },
                    padding: 28
                },
                position: 'bottom'
            }
        }
    };

    barData.value = {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [
            {
                label: 'Revenue',
                backgroundColor: documentStyle.getPropertyValue('--primary-500'),
                barThickness: 12,
                borderRadius: 12,
                data: selectedWeek.value.data[0]
            },
            {
                label: 'Profit',
                backgroundColor: documentStyle.getPropertyValue('--primary-200'),
                barThickness: 12,
                borderRadius: 12,
                data: selectedWeek.value.data[1]
            }
        ]
    };

    barOptions.value = {
        animation: {
            duration: 0
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: textColor,
                    usePointStyle: true,
                    font: {
                        weight: 700
                    },
                    padding: 28
                },
                position: 'bottom'
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
};
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const exportCSV = () => {
    salesTableRef.value.exportCSV();
};

const onWeekChange = () => {
    let newBarData = { ...barData.value };
    newBarData.datasets[0].data = selectedWeek.value.data[0];
    newBarData.datasets[1].data = selectedWeek.value.data[1];
    barData.value = newBarData;

    setChartData();
};

watch(
    layoutConfig.colorScheme,
    () => {
        setChartData();
    },
    { immediate: true }
);

watch(
    layoutConfig.theme,
    () => {
        setChartData();
    },
    { immediate: true }
);

</script>
<template>
     <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="900" class="relative overflow-hidden h-19rem bg-primary flex flex-column align-items-center justify-content-center border-round" style="margin-bottom: 1rem !important;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute w-full top-0 left-0">
            <path
                fill="var(--primary-600)"
                fillOpacity="1"
                d="M0,64L48,90.7C96,117,192,171,288,208C384,245,480,267,576,256C672,245,768,203,864,165.3C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
        <div class="animation-wrapper">
            <div class="font-bold mb-3 text-6xl z-1">
                <h1>Welcome to <span class="blue-color_2">Xojiakbar Siddikov's</span> Portfolio</h1> 
            </div>
        </div>
        <div class="animation-main-wrapper" style="margin-top: 1rem;">
            <div class="uzb-wrapper flex align-items-center anim-typewriter1">
                <h5 class="font-bold mb-2 text-2xl z-1 line-1 animation-text" data-aos="fade-right">Age: <span class="blue-color_2">18 YEARS OLD</span></h5>
                <img src="/demo/images/graduate-hat.png" alt="graduate-hat" width="40" style="margin-bottom: 4px;">
         </div>
         <div class="uzb-wrapper flex align-items-center anim-typewriter2">
             <h5 class="font-bold mb-2 text-2xl z-1 line-1 animation-text" data-aos="fade-left">Major: <span class="blue-color_2">COMPUTER SCIENCE</span></h5> 
            <img src="/demo/images/computer.png" alt="computer-logo" width="30">
         </div>
         <div class="uzb-wrapper flex align-items-center anim-typewriter3">
            <h5 class="font-bold mb-2 text-2xl z-1 line-1 animation-text" data-aos="fade-up">Country: 
                 <span class="blue-color_2">UZBEKISTAN</span>
            </h5>
            <img src="/demo/images/uzb-logo.png" alt="uzbekistan-logo" width="30">
         </div>
        </div> 
    </div>
    <div class="grid">
        <div class="col-12 md:col-6 xl:col-3"  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
            <router-link to="/ielts-certificate">
                <div class="card h-full ielts-card flex align-items-center">
                <div class="flex justify-content-between align-items-center" style="width: 100%; height: 100%;">
                    <img src="/demo/images/ielts-logo.png" alt="ielts-logo" class="ielts-logo" style="width: 56%;">
                    <span class="text-2xl font-bold text-900 center text-h2"><span style="color: #db2727;">IELTS</span> CERTIFICATE</span>
                </div>
            </div>
            </router-link>
        </div>
        <div class="col-12 md:col-6 xl:col-3" style="cursor: pointer;" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
            <router-link to="/sat-certificate">
                <div class="card h-full flex align-items-center">
                <div class="flex justify-content-between mt-3">
                    <div class="w-6">
                        <img src="/demo/images/college-board-logo.png" alt="sat-logo" class="media-width logo-media" style="width: 100%; height: 100%;">
                    </div>
                    <span class="text-2xl font-bold text-900 center text-h2"><span style="color: #160f7e;">SAT</span> CERTIFICATES</span>
                    <div class="w-6 sat-wrapper">
                        <img src="/demo/images/sat-logo.png" alt="sat-logo" class="logo-media" style="width: 100%; height: 100%;">
                    </div>
                </div>
            </div>  
            </router-link>
        </div>
  
        <div class="col-12 md:col-6 xl:col-3" style="cursor: pointer;" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
            <router-link to="/cefr-certificate">
                <div class="card h-full flex align-items-center">
                <div class="flex justify-content-between mt-3">
                    <div class="w-6">
                        <img src="/demo/images/Uzbekistan-gerb.png" class="media-width logo-cefr" alt="cefr-logo" style="width: 100%; height: 100%;">
                    </div>
                    <span class="text-2xl font-bold text-900 center text-h2"><span style="color: #6366f1;">CEFR</span> CERTIFICATES <span style="color: #6366f1;">(MULTILEVEL)</span></span>
                    <div class="w-6 sat-wrapper">
                        <img src="/demo/images/my-gov-logo.png" alt="cefr-logo" class="logo-cefr" style="width: 100%; height: 100%;">
                    </div>
                </div>
            </div>  
            </router-link>
        </div>
        <div class="col-12 md:col-6 xl:col-3" style="cursor: pointer;" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
            <router-link to="/sport-certificate">
                <div class="card h-full flex align-items-center">
                <div class="flex justify-content-between mt-3">
                    <div class="w-6">
                        <img src="/demo/images/united_world_wrestling_logo.png" alt="sport-logo" style="width: 100%; height: 100%;">
                    </div>
                    <span class="text-2xl font-bold text-900 center text-h2"><span style="color: #ff7b00;">SPORT</span> CERTIFICATES</span>
                    <div class="w-6">
                        <img src="/demo/images/united_world_wrestling_logo.png" alt="sport-logo" style="width: 100%; height: 100%;">
                    </div>
                </div>
            </div>  
            </router-link>
        </div>
        <div class="col-12 md:col-6 xl:col-3" style="cursor: pointer;" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
            <router-link to="/school-certificate">
                <div class="h-full card2 flex align-items-center">
                <div class="flex justify-content-between mt-3">
                    <div class="w-6">
                        <img src="/demo/images/school-logo.png" alt="school-logo" class="school-logo" style="width: 100%; height: 100%;">
                    </div>
                    <span class="text-2xl font-bold text-900 center text-h2"><span style="color: #ffb52c;">SCHOOL</span> CERTIFICATES</span>
                    <div class="w-6">
                        <img src="/demo/images/school-logo2.png" alt="school-logo" class="school-logo" style="width: 100%; height: 100%;">
                    </div>
                </div>
            </div>  
            </router-link>
        </div>
        <div class="col-12 md:col-6 xl:col-3"  data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
            <router-link to="/programming-certificate">
                <div class="card h-full others-card flex align-items-center">
                <div class="flex justify-content-between align-items-center" style="width: 100%; height: 100%;">
                    <span class="text-2xl font-bold text-900 center text-h2"><span style="color: #18980b;">PROGRAMMING</span> CERTIFICATES</span>
                    <img src="/demo/images/programming2.png" class="media-height" alt="programming-logo">
                </div>
            </div>
            </router-link>
        </div>
        <div class="col-12 md:col-6 xl:col-3" style="cursor: pointer;" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
            <router-link to="/other-certificate">
                <div class="card h-full others-card flex align-items-center">
                <div class="flex justify-content-between mt-3">
                    <div class="w-6">
                        <img src="/demo/images/certified-logo2.png" alt="extra-certificate-logo" style="width: 100%; height: 100%;">
                    </div>
                    <span class="text-2xl font-bold text-900 center text-h2"><span style="color: #ffb52c;">OTHER EXTRA</span> CERTIFICATES</span>
                    <div class="w-6">
                        <img src="/demo/images/certified-logo.png" alt="extra-certificate-logo" style="width: 100%; height: 100%;">
                    </div>
                </div>
            </div>  
            </router-link>
        </div>
        <div class="col-12 md:col-6 xl:col-3" style="cursor: pointer;" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600">
            <router-link to="/test-tickets">
                <div class="card h-full ticket-card flex align-items-center">
                <div class="flex justify-content-between mt-3">
                    <div class="w-6">
                        <img src="/demo/images/certificates/background/test-ticket2.png" alt="test-tickets" style="width: 100%; height: 100%;">
                    </div>
                    <span class="text-2xl font-bold text-900 center text-h2">TEST <span style="color: #f59e0b;">TICKETS</span></span>
                    <div class="w-6">
                        <img src="/demo/images/certificates/background/test-ticket.png" alt="test-tickets" style="width: 100%; height: 100%;">
                    </div>
                </div>
            </div>  
            </router-link>
        </div>
    </div>
     <div class="card guidance-media" style="padding: 1rem 1rem 0.5rem!important; display: block;" data-aos="zoom-in-down" data-aos-easing="linear" data-aos-duration="600">
                <div class="guidance-wrapper flex align-items-center justify-content-center text-center">
                    <img src="/demo/images/guidance2.png" alt="guidance">
                    <h4 style="margin: 0; font-size: 2rem; text-align: center; color: #6366f1;">Portfolio Guide</h4>
                    <img src="/demo/images/guidance.png" alt="guidance">
                </div>
                <TabView>
                    <TabPanel header="Purpose I">
                        <p class="line-height-3 m-0">
                            “Hi there! Thanks for visiting <span style="color: #6366f1;">my portfolio</span>. I created this site to bring together my achievements, skills, and experiences in one place. Here you will find <span style="color: #6366f1;"> my certificates, university accomplishments, web projects, extracurricular activities,</span> and even a little bit about <span style="color: #6366f1;">my hobbies</span>. Think of this walkthrough as your guide to understanding my journey so far and the goals I’m working toward.”
                        </p></TabPanel
                    >
                    <TabPanel header="Purpose II">
                        <p class="line-height-3 m-0">
                            “This portfolio is more than just <span style="color: #6366f1;">a collection of certificates</span> — it is the story of my growth as a <span style="color: #6366f1;">student, athlete, teacher, and future computer scientist</span>. Each section reflects a step I’ve taken toward building my skills and shaping my future. This walkthrough will show you why I built this platform and how each part connects to <span style="color: #6366f1;">my academic and professional goals</span>.”
                        </p>
                    </TabPanel>
                </TabView>
            </div>
</template>

<style scoped lang="scss">
::v-deep(.rating) {
    .p-rating-icon {
        font-size: 12px;
    }
}
.center {
    text-align: center;
}
// .card:last-child {
//     margin-bottom: 0;
//     padding: 2.5rem;
//     display: flex;
// }
.others-card {
    padding: 2rem 1rem;
}
.animation-main-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
}
.guidance-wrapper > img {
    width: 45px;
    margin: 0 8px;
}
.text-4xl {
    font-size: 1.5rem;
}
.mt-3 {
    align-items: center !important;
}
.mt-3 {
    margin-top: 0 !important;
}
.text-h2 {
    margin: 0 10px;
}

.line-1{
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
}
.uzb-wrapper > img {
    margin-left: 10px;
    margin-bottom: 6px;
    overflow: hidden;
    z-index: 2;
}
/* Animation */
.anim-typewriter1{
    animation: typewriter1 2s steps(44) 1s 1 normal both;
    letter-spacing: 0.05em;
    font-size: 1rem;
}
.anim-typewriter2{
    animation: typewriter2 2s steps(44) 1s 1 normal both;
    letter-spacing: 0.05em;
    font-size: 1rem;
}
.anim-typewriter3{
    animation: typewriter3 2s steps(44) 1s 1 normal both;
    letter-spacing: 0.05em;
    font-size: 1rem;
}
@keyframes typewriter1{
  from{width: 0;}
  to{width: 18em;}
}
@keyframes typewriter2{
  from{width: 0;}
  to{width: 24.5em;}
}
@keyframes typewriter3{
  from{width: 0;}
  to{width: 20em;}
}

.scroll-text p {
  display: inline; 
  padding-right: 50px; 
}
.animation-wrapper {
    box-sizing: border-box;
    overflow: hidden;
}
.animation-wrapper > div {
    -webkit-animation: text-animation 15s infinite linear;
    animation: text-animation 15s infinite linear;
}
.animation-wrapper > div > h1 {
     font-size: 55px;
     line-height: 80px;
     letter-spacing: 0.09em;
     text-transform: uppercase;
     color: #fff;
}
.animation-text {
    color: #fff;
    margin: 0;
}
@keyframes text-animation {
    0% {transform: translateX(100%);
        -webkit-transform: translateX(100%);}
      100% {transform: translateX(-100%);
          -webkit-transform: translateX(-100%);}
}
.container p {
  font-size: 3rem;
  padding: 0.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-align: center;
  overflow: hidden;
}

@-webkit-keyframes text-animation {
    0% {-webkit-transform: translateX(100%);}
      100% {-webkit-transform: translateX(-100%);}
}

.card2 {
    padding: 2.5rem 1rem 2rem 1rem !important;
    margin-bottom: 0;
    display: flex;
    background: var(--surface-card);
    border: 1px solid var(--surface-border);
    box-shadow: var(--card-shadow);
    border-radius: 12px;
}
.media-height {
    width: 60%; 
    height: 70%; 
}
.blue-color_2 {
    color: #f59e0b;
}
@media screen and (max-width: 1600px) {
    .text-h2 {
    font-size: 1rem !important;
    }
    .media-height {
        width: 35%;
        height: 50%;
    }
    .animation-wrapper > div > h1 {
        font-size: 42px;
    }
    .animation-main-wrapper > h5 {
        font-size: 1.3rem !important;
    }
}

@media screen and (max-width: 1030px) {
    .animation-main-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        align-content: flex-end;
        flex-direction: column-reverse;
        margin-top: 0!important;
    }
    .animation-wrapper > div > h1 {
        line-height: 55px;
        font-size: 26px;
    }
}

@media screen and (max-width: 700px) {
    .text-h2 {
        font-size: 1.5rem !important;
    }
    .sat-wrapper {
        text-align: center;
    }
    .ielts-card {
        padding: 6rem 1rem !important;
    }
    .logo-cefr {
        width: 95% !important;
    }
    .ielts-logo {
        width: 50% !important;
    }
    .w-6 {
    width: 18% !important;
    }
    .ticket-card {
        padding: 5rem 1rem !important;
    }
    .school-logo {
        width: 90% !important; 
    }
    .media-height {
        width: 31% !important;
        height: 100% !important;
    }
    .card2 {
        padding: 3rem 1rem!important;
    }
    .card {
        padding: 3.5rem 1rem;
    }
    .animation-text {
        font-size: 1rem !important;
        text-align: center;
    }
    .text-6xl {
        font-size: 2.2rem !important;
        text-align: center;
    }
    .text-media {
        text-align: center;
    }
    .animation-wrapper > div > h1 {
        font-size: 30px;
        line-height: 40px;
    }
    .anim-typewriter {
        font-size: 1rem!important;
    }
    .animation-main-wrapper {
        display: inline-block;
        margin: 30px auto 0;
        width: auto;
        margin-left: 15px;
    }
    .guidance-media {
        margin-top: 20px;
    }
    @keyframes typewriter1{
    from{width: 0;}
    to{width: 14em;}
    }
    @keyframes typewriter2{
    from{width: 0;}
    to{width: 23em;}
    }
    @keyframes typewriter3{
    from{width: 0;}
    to{width: 15em;}
    }
}

@media screen and (max-width: 500px) {
    .ielts-card {
        padding: 5rem 1rem !important;
    }
    .card:last-child {
        padding: 3.5rem!important;
    }
}

@media screen and (max-width: 460px) {
    .animation-wrapper > div > h1 {
        font-size: 25px;
        line-height: 34px;
    }
    .card:last-child {
        padding: 4rem!important;
    }
}

@media screen and (max-width: 400px) {
    .ielts-card {
        padding: 3rem 1rem !important;
    } 
    .animation-wrapper > div > h1 {
        font-size: 20px;
        line-height: 26px;
    }
}
</style>
