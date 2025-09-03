<script setup>

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card card-resume">
                <h4 style="margin: 0;">Resume</h4>
                    <div class="col-12 p-0 mt-3">
                        <div class="flex justify-content-space-around align-items-center w-full img-wrapper width-images score-down-image resume-width-images">
                            <Image src="/demo/images/certificates/resume/1.png" class="with-image" preview data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600"/>
                            <Image src="/demo/images/certificates/resume/2.png" class="with-image" preview data-aos="fade-up" data-aos-easing="linear" data-aos-duration="600"/>
                        </div>
                    </div>
                    <div class="flex justify-content-space-around text-warpper resume-text-wrapper">
                        <h5 class="text">1ST<span class="blue-color" style="margin-left: 3px;">PAGE</span></h5>
                        <h5 class="text">2ND<span class="blue-color" style="margin-left: 3px;">PAGE</span></h5>
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
    .card-resume {
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
        .resume-text-wrapper > h5{
            font-size: 1rem !important;
        }
        .resume-width-images > span {
            width: 45% !important;
        }
        .card-resume > h4 {
            font-size: 1.3rem;
        }
    }
</style>