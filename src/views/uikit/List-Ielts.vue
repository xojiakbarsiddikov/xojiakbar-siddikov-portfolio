<script setup>

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card" style="padding-bottom: 0.5rem !important;">
                <h5><span class="blue-color text-left">IELTS</span>CERTIFICATES</h5>
                    <div class="col-12 p-0">
                        <div class="flex justify-content-space-around align-items-center w-full img-wrapper width-images score-down-image">
                            <Image src="/demo/images/certificates/ielts/my_ielts.jpg" class="with-image" preview data-aos="fade-down"/>
                            <Image src="/demo/images/certificates/ielts/break-down.jpg" class="with-image second-image" preview data-aos="fade-up"/>
                        </div>
                    </div>
                    <div class="flex justify-content-space-around text-warpper">
                        <h5 class="text"><span class="blue-color">1st</span> ATTEMPT (TOTAL SCORE:<span class="blue-color text-right">BAND 7.0</span>)</h5>
                        <h5 class="text">SCORE-DOWN(<span class="blue-color text-right">Section-by-Section</span>)</h5>
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
        width: 33.4% !important;
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
    @media (max-width: 600px) {
        h5 {
         font-size: 0.5rem !important;
        }
    }
</style>
