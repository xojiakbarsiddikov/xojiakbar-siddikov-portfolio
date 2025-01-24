<script setup>

</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card card-bottom" style="padding-bottom: 0.5rem !important;">
                <h5>Grades (G.P.A):<span class="blue-color text-left">(11TH-12TH Grades)</span></h5>
                    <div class="col-12 p-0">
                        <div class="flex justify-content-space-around align-items-center w-full img-wrapper width-images score-down-image grades-warpper">
                            <Image src="/demo/images/certificates/grades/12th.png" class="with-image" preview data-aos="fade-down"/>
                            <Image src="/demo/images/certificates/grades/11th.png" class="with-image" preview data-aos="fade-up"/>
                        </div>
                    </div>
                    <div class="flex justify-content-space-around text-warpper grades-text-wrapper">
                        <h5 class="text">12TH<span class="blue-color" style="margin-left: 3px;">GRADE</span></h5>
                        <h5 class="text">11TH<span class="blue-color" style="margin-left: 3px;">GRADE</span></h5>
                    </div>
            </div>
            <div class="card" style="padding-bottom: 0.5rem !important;">
                <h5>Grades (G.P.A):<span class="blue-color text-left">(9TH-10TH Grades)</span></h5>
                    <div class="col-12 p-0">
                        <div class="flex justify-content-space-around align-items-center w-full img-wrapper width-images score-down-image grades-warpper">
                            <Image src="/demo/images/certificates/grades/10th.png" class="with-image" preview data-aos="fade-down"/>
                            <Image src="/demo/images/certificates/grades/9th.png" class="with-image" preview data-aos="fade-up"/>
                        </div>
                    </div>
                    <div class="flex justify-content-space-around text-warpper grades-text-wrapper">
                        <h5 class="text">10TH<span class="blue-color" style="margin-left: 3px;">GRADE</span></h5>
                        <!-- <h5 class="text"><span class="blue-color">1st</span> ATTEMPT (TOTAL SCORE:<span class="blue-color text-right">7.5</span>)</h5> -->
                        <h5 class="text">9TH<span class="blue-color" style="margin-left: 3px;">GRADE</span></h5>
                        <!-- <h5 class="text"><span class="blue-color">SCORE-DOWN</span>(<span class="blue-color text-right">Section-by-Section</span>)</h5> -->
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
        margin-bottom: 1rem !important;
    }
    @media (max-width: 600px) {
        .grades-text-wrapper > h5 {
          font-size: 1rem !important;
        }
        .grades-warpper > span {
            width: 45% !important;
        }
    }
</style>
