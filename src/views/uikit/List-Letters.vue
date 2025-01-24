<script setup>

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Recommendation<span class="blue-color text-left text-right">Letters:</span></h5>
                    <div class="col-12 p-0">
                        <div class="flex justify-content-space-between align-items-center w-full img-wrapper">
                            <Image src="/demo/images/certificates/recommendation-letter/1.png" class="with-image2" preview data-aos="fade-down"/>
                            <Image src="/demo/images/certificates/recommendation-letter/3.png" class="with-image2" preview data-aos="fade-up"/>
                            <Image src="/demo/images/certificates/recommendation-letter/2.png" class="with-image2" preview data-aos="fade-down"/>
                        </div>
                    </div>
                    <div class="flex justify-content-space-between text-warpper">
                        <h5 class="text">By The Head Teacher of ADC<span class="blue-color text-right">Y.DOSTONBEK</span></h5>
                        <h5 class="text">By The Director of 67-School<span class="blue-color text-right">B.GULBAHOR</span></h5>
                        <h5 class="text">By The Head Teacher of English Life<span class="blue-color text-right">B.SHERMUHAMMAD</span></h5>
                    </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .with-image2 {
        width: 31%;
        border-radius: 12px;
        cursor: pointer;
    }
    .img-wrapper > span > img {
        width: 100%;
        border: 1px solid var(--surface-border);
        box-shadow: var(--card-shadow);
        cursor: pointer;
    }
    .justify-content-space-between {
        justify-content: space-between !important;
    }
    .col-12 {
        padding-top: 0 !important;
    }
    .card {
        padding-bottom: 0.5rem !important;
    }
    .text {
        padding: 0 !important;
        margin: 25px 0 12px 0 !important;
    }
    .layout-content-wrapper {
        padding-bottom: 1rem !important;
    }
    .blue-color {
    color: #6366f1;
    }
    .p-image-preview-indicator {
        height: 99% !important;
    }
    .text-left {
        margin-right: 5px;
    }
    .text-right {
        margin-left: 5px;
    }
    @media (max-width: 610px) {
        h5 {
         font-size: 0.5rem !important;
        }
        .text-warpper {
            text-align: center;
        }
    }
</style>