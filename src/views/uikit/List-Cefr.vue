<script setup>

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card card-cefr">
                <h4 style="margin: 0;" class="cefr-text-media">CEFR<span class="blue-color text-left text-right">(Multilevel)</span>CERTIFICATES: <span class="blue-color">B2x3</span></h4>
                    <div class="col-12 p-0 mt-3">
                        <div class="flex justify-content-space-between align-items-center w-full img-wrapper cefr-media-wrapper">
                            <Image src="/demo/images/certificates/cefr/3-attempt.jpg" class="with-image2" preview data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600"/>
                            <Image src="/demo/images/certificates/cefr/2-attempt.jpg" class="with-image2" preview data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="600"/>
                            <Image src="/demo/images/certificates/cefr/1-attempt.jpg" class="with-image2" preview data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600"/>
                        </div>
                    </div>
                    <div class="flex justify-content-space-between text-warpper cefr-media-wrapper cefr-media-wrapper-text">
                        <h5 class="text"><span class="blue-color">3rd</span> ATTEMPT - TOTAL SCORE:<span class="blue-color text-right">62 (B2)</span></h5>
                        <h5 class="text"><span class="blue-color">2nd</span> ATTEMPT - TOTAL SCORE:<span class="blue-color text-right">55 (B2)</span></h5>
                        <h5 class="text"><span class="blue-color">1st</span> ATTEMPT - TOTAL SCORE:<span class="blue-color text-right">55 (B2)</span></h5>
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
    .card-cefr {
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
    @media (max-width: 700px) {
        .cefr-media-wrapper-text {
         font-size: 1rem !important;
        }
        .cefr-text-media {
            font-size: 1rem;
        }
        .cefr-media-wrapper {
            display: grid!important;
        }
        .with-image2 {
            width: -webkit-fill-available;
        }
        .cefr-media-wrapper-text {
            justify-content: center!important;
        }
    }
</style>