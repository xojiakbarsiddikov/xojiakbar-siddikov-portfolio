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
     <div class="relative overflow-hidden h-20rem bg-primary flex flex-column align-items-center justify-content-center border-round" style="margin-bottom: 3rem !important;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute w-full top-0 left-0">
            <path
                fill="var(--primary-600)"
                fillOpacity="1"
                d="M0,64L48,90.7C96,117,192,171,288,208C384,245,480,267,576,256C672,245,768,203,864,165.3C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
        <div class="font-bold mb-3 text-6xl z-1" data-aos="fade-down"><span class="blue-color_2">College Applicant - </span> SIDDIKOV XOJIAKBAR</div>
        <div class="font-bold mb-2 text-2xl z-1" data-aos="fade-right">Age: <span class="blue-color_2">17 YEARS OLD</span></div>
        <div class="font-bold mb-2 text-2xl z-1" data-aos="fade-left">Major: <span class="blue-color_2">COMPUTER SCIENCE</span></div> 
        <div class="font-bold mb-2 text-2xl z-1" data-aos="fade-up">Country: <span class="blue-color_2">UZBEKISTAN</span></div> 
    </div>
    <div class="grid">
        <div class="col-12 md:col-6 xl:col-3"  data-aos="fade-up">
            <router-link to="/ielts-certificate">
                <div class="card h-full">
                <div class="flex justify-content-between align-items-center" style="width: 100%; height: 100%;">
                    <img src="/demo/images/ielts-logo.png" alt="ielts-logo" class="ielts-logo" style="width: 56%; height: 100%;">
                    <span class="text-2xl font-bold text-900 center text-h2"><span style="color: #db2727;">IELTS</span> CERTIFICATE</span>
                </div>
            </div>
            </router-link>
        </div>
        <!-- <div class="col-12 md:col-6 xl:col-3" style="cursor: pointer;" data-aos="fade-down">
            <router-link to="/sat-certificate">
                <div class="card h-full">
                <div class="flex justify-content-between mt-3">
                    <div class="w-6">
                        <img src="/demo/images/college-board-logo.png" alt="sat-logo" class="media-width logo-media" style="width: 100%; height: 100%;">
                    </div>
                    <span class="text-2xl font-bold text-900 center text-h2"><span style="color: #160f7e;">SAT</span> CERTIFICATES</span>
                    <div class="w-6">
                        <img src="/demo/images/sat-logo.png" alt="sat-logo" class="logo-media" style="width: 100%; height: 100%;">
                    </div>
                </div>
            </div>  
            </router-link>
        </div> -->
  
        <div class="col-12 md:col-6 xl:col-3" style="cursor: pointer;" data-aos="fade-down">
            <router-link to="/cefr-certificate">
                <div class="card h-full">
                <div class="flex justify-content-between mt-3">
                    <div class="w-6">
                        <img src="/demo/images/Uzbekistan-gerb.png" class="media-width logo-cefr" alt="cefr-logo" style="width: 100%; height: 100%;">
                    </div>
                    <span class="text-2xl font-bold text-900 center text-h2"><span style="color: #6366f1;">CEFR</span> CERTIFICATES <span style="color: #6366f1;">(MULTILEVEL)</span></span>
                    <div class="w-6">
                        <img src="/demo/images/my-gov-logo.png" alt="cefr-logo" class="logo-cefr" style="width: 100%; height: 100%;">
                    </div>
                </div>
            </div>  
            </router-link>
        </div>
        <div class="col-12 md:col-6 xl:col-3" style="cursor: pointer;" data-aos="fade-up">
            <router-link to="/sport-certificate">
                <div class="card h-full">
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
        <div class="col-12 md:col-6 xl:col-3" style="cursor: pointer;" data-aos="fade-right">
            <router-link to="/school-certificate">
                <div class="h-full card2">
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
        <div class="col-12 md:col-6 xl:col-3"  data-aos="fade-up">
            <router-link to="/programming-certificate">
                <div class="card h-full" style="padding: 2rem 1rem">
                <div class="flex justify-content-between align-items-center" style="width: 100%; height: 100%;">
                    <span class="text-2xl font-bold text-900 center text-h2"><span style="color: #18980b;">PROGRAMMING</span> CERTIFICATES</span>
                    <img src="/demo/images/programming2.png" class="media-height" alt="programming-logo">
                </div>
            </div>
            </router-link>
        </div>
        <div class="col-12 md:col-6 xl:col-3" style="cursor: pointer;" data-aos="fade-left">
            <router-link to="/other-certificate">
                <div class="card h-full" style="padding: 2rem 1rem">
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
.card:last-child {
    margin-bottom: 0;
    padding: 1rem;
    display: flex;
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
.card2 {
    padding: 2.2rem 1rem 2rem 1rem !important;
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
        color: #1b2536;
}
.blue-color2 {
        color: #6366f1;
}
@media screen and (max-width: 1600px) {
    .text-2xl {
    font-size: 1rem !important;
    }
    .media-height {
        width: 35%;
        height: 50%;
    }
}

@media screen and (max-width: 610px) {
    .logo-media {
        width: 70% !important;
    }
    .logo-cefr {
        width: 95% !important;
    }
    .ielts-logo {
        width: 50% !important;
    }
    .school-logo {
        width: 90% !important; 
    }
    .media-height {
        width: 60% !important; 
        height: 70% !important; 
    }
    .card {
        padding: 2rem 1rem !important;
    }
    .text-2xl {
    font-size: 1.5rem !important;
    }
    .text-6xl {
        font-size: 2.2rem !important;
        text-align: center;
    }
    .text-media {
        text-align: center;
    }
}
</style>
