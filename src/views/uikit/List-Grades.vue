<script setup>

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card card-bottom" style="padding: 2rem 2rem 0 2rem; padding-bottom: 0!important;">
                <h5 style="margin: 0;" class="grades-media-text">SCHOOL GRADUCATION CERTIFICATES <span class="blue-color text-left">(ATTESTATS & GOLD MEDAL)</span></h5>
                    <div class="col-12 p-0 mt-4">
                        <div class="flex justify-content-space-around align-items-center w-full img-wrapper width-images grades score-down-image grades-warpper">
                            <Image src="/demo/images/certificates/grades/11th-grade-attestat.png" class="with-image" preview data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600"/>
                            <Image src="/demo/images/certificates/grades/medal.jpg" class="with-image" preview data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="600"/>
                            <Image src="/demo/images/certificates/grades/9th-grade-attestat.png" class="with-image" preview data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600"/>
                        </div>
                    </div>
                    <div class="flex justify-content-space-around text-warpper grades-text-wrapper">
                        <h5 class="text">11TH<span class="blue-color" style="margin-left: 3px;">GRADE ATTESTAT</span></h5>
                        <h5 class="text">GOLD<span class="blue-color" style="margin-left: 3px;">MEDAL🥇</span></h5>
                        <h5 class="text">9TH<span class="blue-color" style="margin-left: 3px;">GRADE ATTESTAT</span></h5>
                    </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .with-image {
        width: 43%;
        border-radius: 12px;
        cursor: pointer;
    }
    .width-images > span {
        width: 31% !important;
    }
    .score-down-image > .second-image{
        width: 35% !important;
    }
    .grades > span:nth-child(2) {
        width: 25% !important;
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
    .justify-content-space-around {
        justify-content: space-around;
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
    .card-bottom {
        margin-bottom: 0!important;
    }
    @media (max-width: 700px) {
        .grades-text-wrapper > h5 {
          font-size: 0.8rem !important;
        }
        .grades-warpper > span {
            width: 45% !important;
        }
        .grades > span:nth-child(2) {
            width: 37% !important;
            margin: 0 10px;
        }
        .grades-media-text {
            font-size: 0.9rem;
        }
    }
</style>